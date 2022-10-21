/* exported dropRight */
function dropRight(array, count) {
  var result = [];
  if (count > array.length) {
    return array;
  } else {
    for (var i = 0; i < array.length - count; i++) {
      result.push(array[i]);
    } return result;
  }
}
