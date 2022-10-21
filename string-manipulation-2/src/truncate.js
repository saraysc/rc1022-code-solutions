/* exported truncate */
// declare a new function 'truncate' with 2 parameters: 'length' and 'string'
// use the slice method on string, from index 0 to the value of length, and concatenate with ellipsis
// assign the result of that expression to the variable 'result' and return it
function truncate(length, string) {
  // use slice method on string, slicing from index 0 to the length value and concatenate it with ellipsis
  var result = string.slice(0, length) + '...';
  return result;
}
