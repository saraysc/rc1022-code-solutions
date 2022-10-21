/* exported union */
function union(first, second) {
  var result = [];
  for (var i = 0; i < second.length; i++) {

    for (var m = 0; m < first.length; m++) {
      if (result.indexOf(first[m]) < 0) {
        result.push(first[m]);
      }
    } if (result.indexOf(second[i]) < 0) {
      result.push(second[i]);
    }

  } return result;
}
