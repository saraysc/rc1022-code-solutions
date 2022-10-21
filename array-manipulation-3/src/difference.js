/* exported difference */
function difference(first, second) {
  var result = [];
  for (var i = 0; i < second.length; i++) {
    for (var m = 0; m < first.length; m++) {
      if (second.indexOf(first[m]) === -1 && result.indexOf(first[m]) === -1) {
        result.push(first[m]);
      }
    } if (first.indexOf(second[i]) === -1 && result.indexOf(second[i]) === -1) {
      result.push(second[i]);
    }
  } return result;
}
