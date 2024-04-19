# CalmNest

CalmNest is an all-purpose website designed to promote mental health and well-being. To learn more about CalmNest, check out the [dev.to blog post](blog-link) for detailed information.

## What does it do?

You can access the demo video of CalmNest [here](https://youtu.be/l1AOVsF44Vk).

## How to Use

### Powering on the Backend API

1. **Setting up Environment:**
   - Make sure you have Python installed on your system.
   - Optionally, create a new environment for CalmNest.

2. **Clone this Repo:**
   - Clone this repository in your PC.

4. **Install Required Libraries:**
   - Open your terminal and navigate to the AI-Backend folder.
   - Run the following command to install the required libraries: `pip install -r requirements.txt`.

5. **Run the Script:**
   - After the necessary libraries are installed, run the script `server-script.py`.
   - Provide your ngrok authtoken as a parameter while running the script:
     ```
     python server-script.py --authtoken [your-token-here]
     ```
   - This will generate a live public API link that will remain active as long as the script is running.

   **OR**

6. **Alternative Method Using Colab Notebook:**
   - You can also use [this Colab notebook](https://colab.research.google.com/drive/1JnZYh6Y9GQvA7fgEObwzun0sKod_IGBc?authuser=1#scrollTo=sRFdkc5KQjHK) to generate the API link.
   - (Note: The notebook was tested on 15-04-2024)

### Running the Website

1. **Navigate to the website folder :**
   - Clone this repo if not already done, and navigate to website folder.

2. **Install Dependencies:** 
   - Run `npm install` to install the required dependencies.

3. **Run the Website:**
   - After the dependencies are installed, run `npm run dev` to start the website.
   - Enter the generated API link in the box located at the top-left corner of the website.
   
Now, you can finally enter CalmNest and explore its features!
