const express = require('express');
const cors = require('cors');
const { Pool } = require('pg')
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'https://unlock-backend-18eo.onrender.com' 
}));
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  try {
    const result = await pool.query(
      'SELECT answer FROM faq WHERE question ILIKE $1', 
      [`%${question}%`]
    );

    if (result.rows.length > 0) {
      res.json({ answer: result.rows[0].answer });
    } else {
      res.json({ answer: "I'm sorry, I don't know the answer to that yet!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});