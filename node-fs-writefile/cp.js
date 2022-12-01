const fs = require('fs');
const file = process.argv[2];
const newFile = process.argv[3];
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile(newFile, data, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});
