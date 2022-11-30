const fs = require('fs');

try {
  fs.unlinkSync('/tmp/hello');
  console.log('sucessfully deleted /tmp/hello');
} catch (err) {

}

const file = process.argv[2];
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
