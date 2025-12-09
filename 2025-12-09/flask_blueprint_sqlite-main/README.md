# Flask Articles App

A simple Flask application with 3 blueprints (news, sport, economic) using SQLite database.

## Project Structure

```
flsk/
├── backend/
│   ├── __init__.py
│   ├── app.py              # Main Flask application
│   ├── database.py         # Database connection and initialization
│   └── blueprints/
│       ├── __init__.py
│       ├── news.py         # News blueprint
│       ├── sport.py        # Sport blueprint
│       └── economic.py     # Economic blueprint
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── style.css           # Styles
│   └── app.js              # JavaScript client
├── requirements.txt
└── README.md
```

## Installation

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/Mac:
```bash
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the Flask backend:
```bash
python backend/app.py
```

The API will be available at `http://localhost:5000`

2. Open the frontend:
Open `frontend/index.html` in your web browser

## API Endpoints

Each blueprint (news, sport, economic) has the following endpoints:

- `GET /api/{category}/` - Get all articles
- `GET /api/{category}/<id>` - Get a specific article
- `POST /api/{category}/` - Create a new article
- `PUT /api/{category}/<id>` - Update an article
- `DELETE /api/{category}/<id>` - Delete an article

### Example Request

Create a news article:
```bash
curl -X POST http://localhost:5000/api/news/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Breaking News", "content": "This is the content", "author": "John Doe"}'
```

## Features

- Three separate categories: News, Sport, and Economic
- CRUD operations for all categories
- SQLite database for data persistence
- Simple and clean frontend interface
- CORS enabled for cross-origin requests

## Database

The application uses SQLite with three tables:
- `news` - Stores news articles
- `sport` - Stores sport articles
- `economic` - Stores economic articles

Each table has the following columns:
- `id` (INTEGER PRIMARY KEY)
- `title` (TEXT)
- `content` (TEXT)
- `author` (TEXT)
- `created_at` (TIMESTAMP)
