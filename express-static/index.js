const express = require('express');
const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public');
console.log(absolutePath);

const staticMiddleware = express.static(absolutePath);

app.use(staticMiddleware);

app.listen(3000, (req, res) => {
  console.log('Listening on Port 3000!');
});
