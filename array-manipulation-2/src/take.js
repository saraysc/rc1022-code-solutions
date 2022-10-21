/* exported take */
// declare a new function 'take' with two parameters: 'array' and 'count'
// assign an empty array into a new variable 'result'
// loop while i is less than count and push the current element of the array into the result array
// return the result array
function take(array, count) {
// assign an empty array into the variable 'result'
  var result = [];
  // loop through count variable
  for (var i = 0; i < count; i++) {
    // if array has no elements, return an empty array
    if (array.length < 1) {
      return [];
    } else {
      // if the array has element, push the current element of the array into the result array
      result.push(array[i]);
    }
  } return result;
}
