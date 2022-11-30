const fs = require('fs');

const file = [];
for (let i = 2; i < process.argv.length; i++) {
  file.push(process.argv[i]);
}
function concatTxt(file) {

  if (file[0] === undefined) {
    return;
  }
  const nextFile = file.shift();
  read(nextFile);
}
function read(nextFile) {
  fs.readFile(nextFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
    concatTxt(file);
  });
}

concatTxt(file);
