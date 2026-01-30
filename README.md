# UNLOCK Tests - Full-Stack Junior Task

A full-stack application consisting of a React frontend and a Node.js/Express backend, integrated with a PostgreSQL database via Supabase.

## 🚀 Tech Stack
- **Frontend:** React 18, Vite, TypeScript, Material UI (MUI).
- **Backend:** Node.js, Express, `pg` (node-postgres).
- **Database:** PostgreSQL (Hosted on Supabase).

## ⏱️ Reflection & Learning Process
- **Time Taken:** [e.g., 6 hours]
- **Learning Journey:** This was my first time ever using **PostgreSQL** and **Supabase**. My previous experience was strictly with NoSQL (MongoDB) through Codecademy. 
- **The Process:** I utilized **Gemini AI** as a pair-programmer to help me translate my NoSQL knowledge into Relational Database logic. This allowed me to learn SQL syntax, table schema design, and connection pooling in real-time to meet the "PostgreSQL" requirement of this task.
- **Most Challenging Part:** Understanding the shift from flexible JSON-like objects (MongoDB) to structured tables (SQL). Learning how to write a safe `SELECT` query with parameters to prevent SQL injection was a key milestone.

## 🛠️ How to Run
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
- Admin Dashboard: Create a protected route where an admin can add, edit, or delete FAQ entries directly from the UI instead of using the SQL editor.