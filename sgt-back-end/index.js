const pg = require('pg');
const express = require('express');
const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/grades', (req, res, next) => {
  const sql = `
  insert *
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => next(err));
});
