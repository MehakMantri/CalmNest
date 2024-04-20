import torch
import torch.nn.functional as F
from torch import Tensor
from transformers import AutoTokenizer, AutoModel
from transformers import pipeline
import numpy as np
import random

def make_text_readable(text):
    # Replace periods, commas, and semicolons with the same punctuation followed by a newline character
    text = text.replace(". ", ".\n")
    text = text.replace(", ", ",\n")
    text = text.replace("; ", ";\n")
    return text


def average_pool(last_hidden_states: Tensor,
                 attention_mask: Tensor) -> Tensor:
    last_hidden = last_hidden_states.masked_fill(~attention_mask[..., None].bool(), 0.0)
    return last_hidden.sum(dim=1) / attention_mask.sum(dim=1)[..., None]


def get_suggestions(query,database,model,tokenizer):
 embeds=database[1]
 answers=database[2]

 query=[query]
 query_dict = tokenizer(query, max_length=512, padding=True, truncation=True, return_tensors='pt')
 result = model(**query_dict)
 query_embed = average_pool(result.last_hidden_state, query_dict['attention_mask'])
 query_embed = F.normalize(query_embed, p=2, dim=1)

 scores = (query_embed @ embeds.T).flatten()
 index  = torch.argmax(scores)

 if scores[index] > 0.90:
    return random.choice(answers[index])
 else:
    return "No Suggestions"
 

def infer(question,suggestion,pipe):
  messages = [
    {
        "role": "system",
        "content": "You are a friendly mental-health chatbot.",
    },
    {"role": "user", "content":f'''Give a short answer to this query. If there is a suggested answer provided, use it. : \n Query : {question} \n Suggested Answer : {suggestion}'''},
 ]

  prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
  outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
  return outputs[0]["generated_text"].split("<|assistant|>")[1]

def get_response(query,data,pipe,model,tokenizer):
  sug=get_suggestions(query,data,model,tokenizer)
  return infer(query,sug,pipe)
  
  
def euclidean_distance(point1, point2):
    return np.sqrt(np.sum((np.array(point1) - np.array(point2))**2))

def compare_scores(input_scores, result_list):
    min_distance = float('inf')
    closest_match = None

    for result_scores, frequencies in zip(result_list[0], result_list[1]):
        distance = euclidean_distance(input_scores, result_scores)
        if distance < min_distance:
            min_distance = distance
            closest_match = frequencies

    return closest_match
