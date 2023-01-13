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
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: An unexpected error occured');
    });
});

app.post('/api/grades', (req, res, next) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json('Input missing');
  } else if (!Number.isInteger(score) || score >= 0 || score <= 100) {
    res.status(400).json('Score should be an integer from 0 to 100');
  }
  const sql = `
  insert into "grades" ("name","course","score")
  values($1,$2,$3)
  returning *
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: An unexpected error occured');
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const { name, course, score } = req.body;
  const gradeId = req.params.gradeId;
  if (!name || !course || !score || !gradeId) {
    res.status(400).json('Invalid input');
  } else if (!Number.isInteger(score) || score >= 0 || score <= 100) {
    res.status(400).json('Score should be an integer from 0 to 100');
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json('Grade does not exist in database');
      } else {
        res.status(200).json(grade);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: An unexpected error occured');
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0 || gradeId > 100) {
    res.status(400).json('Invalid gradeId');
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json('GradeId does not exist in database');
      } else {
        res.status(204).json(result.rows);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error: An unexpected error occured');
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express Server listening on port 3000');
});
