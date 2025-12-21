import os
from django.shortcuts import render
from .models import Conversation
from google import genai
from dotenv import load_dotenv

# טעינת משתני הסביבה (ה-API Key)
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

def ask_gemini(request):
    result = None
    
    if request.method == 'POST':
        user_question = request.POST.get('question')
        agent_choice = request.POST.get('agent_type') # 'fast' or 'accurate'

        # בחירת המודל לפי דרישת המשתמש
        if agent_choice == 'fast':
            model_name = "gemini-2.5-flash-lite" # מודל מהיר וחסכוני
        else:
            model_name = "gemini-2.5-flash-lite"   # מודל חכם ומדויק יותר

        try:
            # 1. חיבור ל-Gemini
            client = genai.Client(api_key=API_KEY)
            
            # 2. שליחת הבקשה
            response = client.models.generate_content(
                model=model_name,
                contents=user_question
            )
            ai_answer = response.text

            # 3. שמירה ב-Database
            Conversation.objects.create(
                question=user_question,
                answer=ai_answer,
                agent_type=agent_choice
            )
            
            result = ai_answer

        except Exception as e:
            result = f"Error: {str(e)}"

    # שליפת ההיסטוריה כדי להציג למטה (אופציונלי)
    history = Conversation.objects.all().order_by('-created_at')[:5]

    return render(request, 'chat/home.html', {'result': result, 'history': history})