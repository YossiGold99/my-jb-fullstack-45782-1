import os
from dotenv import load_dotenv
from google import genai

def main():
    # Load environment variables
    load_dotenv()
    
    # Initialize the new GenAI Client
    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

    try:
        # Using the new SDK syntax
        response = client.models.generate_content(
            model="gemini-2.5-flash-lite", 
            contents="how to roast a chicken?"
        )

        print("--- Gemini Response ---")
        print(response.text)

    except Exception as e:
        # This will catch the 429 Quota error if it happens again
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()