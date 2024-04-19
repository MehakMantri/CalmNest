import argparse
from pyngrok import ngrok
import random
import torch
import torch.nn.functional as F
from torch import Tensor
from transformers import AutoTokenizer, AutoModel
from transformers import pipeline

from utils import *

from flask import Flask, request, jsonify
from flask_cors import CORS
import atexit
import threading
from datetime import datetime
import joblib

import numpy as np
import os

script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# Parse command-line arguments
parser = argparse.ArgumentParser(description="Run Flask server with ngrok tunneling")
parser.add_argument("--authtoken", type=str, required=True, help="Authentication token for ngrok")
args = parser.parse_args()

music_data = joblib.load("music_data.pkl")
database = torch.load("database.pth")
tokenizer = AutoTokenizer.from_pretrained("Supabase/gte-small")
model = AutoModel.from_pretrained("Supabase/gte-small")
pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", torch_dtype=torch.bfloat16,
                device_map="auto")

ngrok.kill()  # Make sure to run it on server restart to kill existing processes

ngrok.set_auth_token(args.authtoken)

app = Flask(__name__)

CORS(app, origins="http://localhost:5173")

public_url = ngrok.connect(5000).public_url
print(f"PUBLIC URL :{public_url}")

def exit_handler():
    print("Flask app is exiting. Stopping ngrok.")
    ngrok.kill()

atexit.register(exit_handler)

@app.route('/chat', methods=['POST'])
def process_query():
    data = request.get_json()
    if 'query' in data:
        query = data['query']
        response = {'Answer': get_response(query, database, pipe, model, tokenizer)}
        return jsonify(response), 200
    else:
        return jsonify({'error': 'No query provided'}), 400

@app.route('/music', methods=['POST'])
def process_music():
    scores = request.get_json()
    if 'A_D_Scores' in scores:
        a_d = scores['A_D_Scores']
        response = {'Results': compare_scores(a_d, music_data)}
        return jsonify(response), 200
    else:
        return jsonify({'error': 'No query provided'}), 400

def print_alive():
    print(f"I am alive!! on {public_url}", datetime.now())
    threading.Timer(60, print_alive).start()

threading.Timer(60, print_alive).start()

app.run(port=5000)
