# Student Management Application System
This is a full-stack Student Management System built using **Flask (backend)** and **React (frontend)**.  
The application allows users to perform CRUD (Create, Read, Update, Delete) operations on student records.

---

## Functionality
- View all students
- View a single student
- Add a new student
- Update an existing student
- Delete a student

---

## Layout

### Frontend
- React
- Axios
- CSS

### Backend
- Flask
- Flask-CORS

### Tools
- Postman (API testing)
- Git & GitHub

---

## Project Structure
student-management-application/
│
├── backend/
│ ├── app.py
│ ├── Pipfile
│ ├── Pipfile.lock
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│
└── README.md

---

## Setup 

### Backend
```bash
git clone the starter repo into the root of your project git@github.com:k-koech/Assignment_starter.git
cd backend
pipenv install
pipenv run python app.py
backend runs on http://127.0.0.1:5000

### Frontend
mkdir frontend
cd frontend
npm install
npm start
frontend runs on http://localhost:3000

---
## API Endpoints
Method	  Endpoint	     Description
GET	      /students	     Get all students
GET	      /student/:id	 Get a single student
POST	  /student	     Create a new student
PUT	      /student/:id	 Update a student
DELETE	  /student/:id	 Delete a student

## Testing
All testing were done using Postman

## Author
Fatuma Asman