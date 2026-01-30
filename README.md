# UNLOCK Tests - Full-Stack Junior Task

A full-stack application consisting of a React frontend and a Node.js/Express backend, integrated with a PostgreSQL database via Supabase.

## 🔗 Live Demo
- **Frontend:** [https://unlock-frontend.vercel.app/](https://unlock-frontend.vercel.app/)
- **Backend API:** [https://unlock-backend-18eo.onrender.com/api/ask](https://unlock-backend-18eo.onrender.com/api/ask)

> **⚠️ Note on Performance:** The backend is hosted on a Render free instance. If the app hasn't been used recently, the server will "sleep." It may take **30-60 seconds** to respond to the first request while it wakes up.

## 🧪 How to Test
The assistant is pre-loaded with specific knowledge in the PostgreSQL database. Try asking:
* "What is React?"
* "What is Supabase?"
* "Who created this app?"
* "Hello"

## 🚀 Tech Stack
- **Frontend:** React 18, Vite, TypeScript, Material UI (MUI).
- **Backend:** Node.js, Express, `pg` (node-postgres).
- **Database:** PostgreSQL (Hosted on Supabase).

## ⏱️ Reflection & Learning Process
- **Time Taken:** ~6-8 hours.
- **Learning Journey:** This was my first time ever using **PostgreSQL** and **Supabase**. My previous experience was strictly with NoSQL (MongoDB) through Codecademy courses. 
- **The Process:** I utilized **Gemini AI** as a pair-programmer to help me translate my NoSQL knowledge into Relational Database logic. This allowed me to learn SQL syntax, table schema design, and connection pooling in real-time to meet the "PostgreSQL" requirement of this task.
- **Most Challenging Part:** Understanding the shift from flexible JSON-like objects (MongoDB) to structured tables (SQL). Learning how to write a safe `SELECT` query with parameters to prevent SQL injection was a key milestone.

## 🛠️ Local Setup
1. **Backend:**
   - `cd backend`
   - `npm install`
   - Add `.env` with `DATABASE_URL`
   - `npm start`
   
2. **Frontend:**
   - `cd frontend`
   - `npm install`
   - `npm run dev`

## 🌟 Future Improvements
- **Admin Dashboard:** Create a protected route where an admin can add, edit, or delete FAQ entries directly from the UI instead of using the SQL editor.