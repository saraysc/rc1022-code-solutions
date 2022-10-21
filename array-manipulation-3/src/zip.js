/* exported zip */
function zip(first, second) {
  var array = [];
  var subArray = [];
  for (var i = 0; i < first.length; i++) {
    if ((first.length === second.length) || (first[i] && second[i])) {
      subArray = [first[i], second[i]];
    }

    if (subArray.length === 2) {
      array.push(subArray);
      subArray = [];
    }
  } return array;
}
