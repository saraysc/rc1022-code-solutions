/* exported intersection */
function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) > -1) {
      result.push(first[i]);
    }
  } return result;
}
