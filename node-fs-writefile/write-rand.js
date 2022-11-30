const fs = require('fs');
const randomNum = Math.random();

fs.writeFile('random.txt', randomNum + '\n', 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
