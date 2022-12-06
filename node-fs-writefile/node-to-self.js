const fs = require('fs');
const element = process.argv[2];

fs.writeFile('note.txt', element + '\n', 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
