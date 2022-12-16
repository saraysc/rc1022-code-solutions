const express = require('express');
const app = express();
app.use(express.json());

const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const errorMessage = {
  requiredField: { error: 'name, course, and score are required field' },
  notInteger: { error: 'score should be an integer from 0 to 100' },
  invalidGradeId: { error: 'invalid gradeId' },
  inexistentGradeId: {error: `cannot find note with id ${req.params.id}`
},
  unexpected: {
    error: 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
  }
};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  SELECT *
  FROM "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).send(grade);
    }).catch(err => {
      console.error(err);
      res.status(500).send(errorMessage.unexpected);
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send(errorMessage.requiredField);
  } else if (!(req.body.score >= 0 && req.body.score <= 100) || isNaN(req.body.score)) {
    res.status(400).send(errorMessage.notInteger);
  } else {
    const sql = `
  insert into "grades" ("name", "course","score")
  values($1,$2,$3)
  returning *
  `;
    const params = [req.body.name, req.body.course, req.body.score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).send(grade);
      }).catch(err => {
        console.error(err);
        res.status(500).send(errorMessage.unexpected);
      });
  }

});
app.put('/api/notes/:gradeId', (req, res) => {
  if (isNaN(req.params.gradeId)) {
    if (Number.isInteger(req.params.gradeId) && req.params.gradeId > 0) {
      res.status(400).send(errorMessage.invalidGradeId)
    } else if (!data.notes[req.params.id]) {
      res.status(404).send(errorMessage.inexistentGradeId)
    } else{
      const sql = `
      insert into "grades" ("name", "course","score")
      values($1,$2,$3)
      returning *
  `;
      const params = [req.body.name, req.body.course, req.body.score];
      db.query(sql, params)
        .then(result => {
          const grade = result.rows[0];
          res.status(201).send(grade);
        }).catch(err => {
          console.error(err);
          res.status(500).send(errorMessage.unexpected);
        });
    }
}
}

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express Server listening on port 3000');
});
