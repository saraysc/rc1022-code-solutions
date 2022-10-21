/* exported unique */
// declare a new function 'unique' with one parameter: 'array'
// assign an empty array into the 'result' variable
// loop through the 'array'
// check if the result variable already has the element of array[i]
// if it does not have, push the element into the 'result' array

function unique(array) {
  // assign an empty array into the 'result' variable
  var result = [];
  // loop through the 'array'
  for (var i = 0; i < array.length; i++) {
    // check if the 'result' array already has the element of array[i]
    if (result.indexOf(array[i]) === -1) {
      // if it does not have, push the element into the 'result' array
      result.push(array[i]);
    }
  } return result;
}
