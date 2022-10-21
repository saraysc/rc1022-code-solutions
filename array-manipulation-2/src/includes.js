/* exported includes */
// declare a new function named 'includes' with two parameters: 'array' and 'value'
// loop through the array
// if we find an element of the array that is strictly equal to 'value', return true
// else, return false
function includes(array, value) {
  // loop through the input array
  for (var i = 0; i < array.length; i++) {
  // if the current element of the array is strictly equal to 'value', return true
    if (array[i] === value) {
      return true;
    }
  } return false;
}
