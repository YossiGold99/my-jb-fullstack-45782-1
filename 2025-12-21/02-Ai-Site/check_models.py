import os
from dotenv import load_dotenv
from google import genai

# טעינת המפתח
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

print("--- רשימת המודלים הזמינים עבורך ---")
try:
    # שליפת רשימת המודלים
    for model in client.models.list(config={"page_size": 100}):
        # נסנן רק את אלו שתומכים ב-generateContent
        if "generateContent" in model.supported_generation_methods:
            print(f"Model Name: {model.name}")
            print(f"Display Name: {model.display_name}")
            print("-" * 20)
            
except Exception as e:
    print(f"Error: {e}")