const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

const pool = new Pool({
  host: 'postgres-db',       
  user: 'postgres',
  password: 'password',
  database: 'bookstore',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`PostgreSQL is connected! Time: ${result.rows[0].now}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
