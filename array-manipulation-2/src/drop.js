/* exported drop */
// declare a new function named 'drop' with 2 parameters: 'array' and 'count'
// assign an empty array into the variable 'result'
// loop through array and initialize i to 'count' variable
// push the current element of the array into the result array
function drop(array, count) {
// assign an empty array into the result variable
  var result = [];
  // initialize i to 'count' and loop while i is less and array.length
  for (var i = count; i < array.length; i++) {
    // push the current element of the array into the result array
    result.push(array[i]);
  } return result;
}
