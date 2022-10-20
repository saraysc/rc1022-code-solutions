/* exported tail */
// declare a function named 'tail' with the parameter 'array'
// assign an empty array into a new variable named result
// use a for loop that will iterate until it reaches array.length
// with each iteration, push the current element of the array into the result variable
// after we're done iterating, return the result variable

function tail(array) {
  // assign an empty array to a variable
  var result = [];
  // loop through the input array
  for (var i = 1; i < array.length; i++) {
    // push the current element of the array into the result array
    result.push(array[i]);
  } // return result array;
  return result;
}
