/* exported getKeys */
function getKeys(object) {
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}
