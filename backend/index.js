const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const insertText = `
      INSERT INTO leads (name, email, phone)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, phone, status, created_at
    `;
    const values = [name.trim(), email.trim(), phone.trim()];
    const result = await pool.query(insertText, values);
    const lead = result.rows[0];
    return res.status(201).json({ lead });
  } catch (err) {
    console.error('Error saving lead:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('LeadGrowth Engine backend running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
