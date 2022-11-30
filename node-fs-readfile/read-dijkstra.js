const fs = require('fs');

try {
  fs.unlinkSync('/tmp/hello');
  console.log('sucessfully deleted /tmp/hello');
} catch (err) {

}

fs.readFile('./dijkstra.txt', 'utf8', callback);

function callback(err, data) {
  if (err) throw err;
  console.log(data);
}
