# Django-React-Notes-App

A full-stack notes application built with Django (backend) and React (frontend).  
Create, read, update, and delete notes through a REST API with a modern React user interface.

---

## 🧰 Tech Stack

- Backend: Django + Django REST Framework  
- Frontend: React  
- Database: SQLite (default Django setup)  
- API architecture: REST  

---

## 🚀 Features

- Create new notes  
- View list of notes  
- Update existing notes  
- Delete notes  
- Full CRUD operations via REST API  
- React frontend consumes the API  

---

## 📁 Project Structure

/mynotes ← main Django project folder
/api ← Django app for the REST API
/frontend ← React frontend application
db.sqlite3 ← SQLite database (auto-generated)
manage.py ← Django management script

yaml


---

## 📥 Setup & Run Locally

### 1. Clone the repo  
```bash
git clone https://github.com/adelana107/Django-React-Notes-App.git
cd Django-React-Notes-App
2. Setup backend
bash

# (Windows)
python -m venv venv
venv\Scripts\activate

# or on macOS/Linux
python3 -m venv venv
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
3. Setup frontend (in a new terminal tab/window)
bash

cd frontend
npm install
npm start
Backend will run on http://127.0.0.1:8000/ by default.

Frontend will run on http://localhost:3000/ (or whichever port React chooses).

📡 How to Use
Once both backend and frontend are running:

Open your browser to http://localhost:3000/

Use the UI to create, view, update, and delete notes

Requests are sent to the Django REST API under the hood.

🤝 Contributing
Feel free to fork, open issues or create pull requests. Suggestions, bug reports and improvements are welcome.

📝 License
This project is open-source. Use, modify, and share freely.
