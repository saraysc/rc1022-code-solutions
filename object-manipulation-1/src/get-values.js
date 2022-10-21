/* exported getValues */
function getValues(object) {
  var result = [];
  for (var key in object) {
    result.push(object[key]);
  } return result;
}
