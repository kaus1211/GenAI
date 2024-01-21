# app.py

from flask import Flask, render_template, request, jsonify
from llm_model import run_llm_model

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/process_message', methods=['POST'])
def process_message():
    user_message = request.json['message']

    # Call the function from llm_model.py
    model_response = run_llm_model(user_message)

    return jsonify({'message': model_response})

if __name__ == '__main__':
    app.run(debug=True)
