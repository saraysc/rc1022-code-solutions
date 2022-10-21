/* exported takeRight */
function takeRight(array, count) {
  var result = [];
  if (count > array.length) {
    return array;
  } else {
    result = array.slice([array.length - count]);
    return result;
  }
}
