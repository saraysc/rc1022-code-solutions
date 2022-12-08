const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

const newJSON = JSON.stringify(data, null, 2);

app.get('/api/notes', (req, res) => {
  const array = [];
  if(!data.notes){
    return [];
  }
  for (const index in data.notes) {
    array.push(data.notes[index]);
  }
   res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  if (isNaN(req.params.id)){
    res.status(400).send(`Error: Id must be a positive integer`);
  } else if (data.notes[req.params.id] ===undefined){
    res.status(404).send(`Error: Cannot find note with id ${req.params.id} `);
  } else{
    res.status(200).json(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  if(!req.body.content){
    res.status(400).send(`Error: Content is a required field`);
  } else{
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    res.status(201).send(data.notes[data.nextId]);
    data.nextId++;
    fs.writeFile('data.json', newJSON, 'utf8', err=>{
      if(err){
        console.log(err);
        res.status(500).send('{"error": "An unexpected error occurred."}')
      }
    })
  }
})

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id===undefined){
    res.status(400).send("Id number is undefined")
  } else if (!data.notes[req.params.id]){
    res.status(404).send("Id number does not exist")
  } else if (data.notes[req.params.id]){
    delete data.notes[req.params.id];
    res.sendStatus(204)
    fs.writeFile('data.json', newJSON,'utf8', err => {
      if (err) {
        console.log(err);
        res.status(500).send('{"error": "An unexpected error occurred."}')
      }
    })
  }
});

app.put('/api/notes/:id', (req,res)=>{
  if (isNaN(req.params.id)) {
    res.status(400).send(`Error: id must be a positive integer`)
  } else if (!data.notes[req.params.id]) {
    res.status(404).send(`Error: cannot find note with id ${req.params.id}`)
  } else if (data.notes[req.params.id]) {
     if (!req.body.content) {
       res.status(404).send(`Error: content is a required field`)
     } else{
       data.notes[req.params.id].content = req.body.content;
       res.sendStatus(204)
     }

    fs.writeFile('data.json', newJSON, 'utf8', err => {
      if (err) {
        console.log(err);
        res.status(500).send('{"error": "An unexpected error occurred."}')
      }
    })
  }
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
