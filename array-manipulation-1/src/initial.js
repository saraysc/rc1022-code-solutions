/* exported initial */
// declare a function named 'initial' with one parameter: 'array'
// assign an empty array into a new variable named 'result'
// use a for loop to iterate through array.length
// with each iteration, push the current element of the array into the result array
// after we're done iterating, we'll return the result array

function initial(array) {
  // assign an empty array into a variable
  var result = [];
  // loop through the input array
  for (var i = 0; i < array.length - 1; i++) {
    // push the array element at index i into the result array
    result.push(array[i]);
  } return result;
}
