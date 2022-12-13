const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const index in data.notes) {
    array.push(data.notes[index]);
  }
   res.status(200);
   res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  if (!Number.isInteger(req.params.id) || req.params.id<0){
    res.status(400).json(`Error: Id must be a positive integer`);
  } else if (data.notes[req.params.id] ===undefined){
    res.status(404).json(`Error: Cannot find note with id ${req.params.id} `);
  } else{
    res.status(200).json(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  if(!req.body.content){
    res.status(400).json(`Error: Content is a required field`);
  } else{
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    res.status(201).json(data.notes[data.nextId]);
    data.nextId++;
    writeFile(data,res,'post');
}})

app.delete('/api/notes/:id', (req, res) => {
  if (!req.params.id){
    res.status(400).send("Id number is undefined")
  } else if (!data.notes[req.params.id]){
    res.status(404).send("Id number does not exist")
  } else if (data.notes[req.params.id]){
    delete data.notes[req.params.id];
    res.sendStatus(204)
    writeFile(data,res,'delete')
}});

app.put('/api/notes/:id', (req,res)=>{
  if (!Number.isInteger(req.params.id) || req.params.id < 0) {
    res.status(400).send(`Error: id must be a positive integer`)
  } else if (!data.notes[req.params.id]) {
    res.status(404).send(`Error: cannot find note with id ${req.params.id}`)
  } else if (data.notes[req.params.id]) {
     if (!req.body.content) {
       res.status(400).send(`Error: content is a required field`)
     } else{
       data.notes[req.params.id].content = req.body.content;
       writeFile(data,res,'put',req);
     }
  }
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

function writeFile(data,res,command,req){
  const newJson = JSON.stringify(data,null,2);
  fs.writeFile('data.json',newJson,'utf8',err=>{
    if(err){
      response.status(500).json("error: 'an unexpected error occured'");
      console.error(err)
    } else{
      if(command==='delete'){
        res.sendStatus(204);
      } else if(command==='post'){
        res.status(201).send(data.notes[data.nextId]);
      }
      else if(command==='put'){
        res.status(200).send(data.notes[req.params.id]);
      }
    }
  })
}
