const express=require('express');
const grades = {};
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const index in grades) {
    array.push(grades[index]);
  } res.status(200).json(array);
});

let idNumber = 1;
app.post('/api/grades', (req,res)=>{
  grades[idNumber] = req.body;
  req.body.idNumber = idNumber;
  idNumber++;
  res.status(201).send(req.body);
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
