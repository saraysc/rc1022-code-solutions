/* exported reverse */
function reverse(array) {
  // assign an empty array into a variable
  var result = [];
  // loop until i reaches array.length
  for (var i = array.length - 1; i >= 0; i--) {
    // push array[i] into the result array
    result.push(array[i]);
  } return result;
}
