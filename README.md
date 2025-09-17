# ✅ To-Do Fullstack (React + Node.js)

App To-Do con **backend en Node.js/Express** y **frontend en React (Vite)**.  
Lista para correr en **Render** 🚀.

---

## 📂 Estructura

api/        → Backend (Express) frontend/   → Frontend (React + Vite)

---

## ⚙️ Uso local

### Backend
```bash
cd api
npm install
npm start

👉 Corre en http://localhost:5000

Frontend

cd frontend
npm install
npm run dev

👉 Corre en http://localhost:3000


---

🚀 Deploy en Render

API

Root: api/

Build: npm install

Start: npm start


Frontend

Root: frontend/

Build: npm run build

Publish: dist

Var env:

VITE_API_URL=https://tu-api.onrender.com/api/tasks



---

📌 Endpoints

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id
