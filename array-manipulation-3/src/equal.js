/* exported equal */
// declare a new function named 'equal' with two parameters: 'first' and 'second'
// loop through the 'first' array and check if its value is strictly equal to the value of the corresponding index of 'second' array
// if its not equal, return false. if it is, return true
function equal(first, second) {
  // loop through the 'first' array
  for (var i = 0; i < first.length; i++) {
    // using if statement, check the value of first[i] is strictly equal to the value of the corresponding index of 'second' array
    if (first[i] !== second[i] || first.length !== second.length) {
      // return false if its not equal
      return false;
    }
  }// return true if all the elements of the 'first' array is equal to elements of 'second' array
  return true;
}
