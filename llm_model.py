from dotenv import dotenv_values
from openai import OpenAI

def run_llm_model(user_message):
    config = dotenv_values(".env")
    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key=config['OPENAI_API_KEY'],
    )

    completion = client.chat.completions.create(
        model="mistralai/Mixtral-8x7B-v0.1",
        messages=[
            {
                "role": "user",
                "content": user_message,
            },
        ],
    )

    return completion.choices[0].message.content
