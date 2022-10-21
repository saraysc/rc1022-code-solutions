/* exported flatten */
// declare a new function named 'flatten' with one parameters: 'array'
// assign an empty array into the 'result' variable
// loop through the 'array' and check if the value is an array or not
// if it is, loop through the array inside the array and push its element into the result array
// if its not, just push the element of the 'array' into the 'result' variable

function flatten(array) {
  // assign an empty array into the 'result' variable
  var result = [];
  // loop through the 'array'
  for (var i = 0; i < array.length; i++) {
    // check if the value is an array or not
    if (Array.isArray(array[i])) {
      // loop through the array inside the array and push its element into the result array
      for (var m = 0; m < array[i].length; m++) {
        result.push(array[i][m]);
      }
    } else { // else, just push the current element of the 'array' into the 'result' variable
      result.push(array[i]);
    }
  } return result;
}
