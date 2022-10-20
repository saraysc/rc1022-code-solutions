/* exported compact */
function compact(array) {
  // assign an empty array into a variable
  var result = [];
  for (var i = 0; i < array.length; i++) {
    // if conditional to check if the current element satisfies the condition below
    if (array[i] < 0 || array[i] === undefined || array[i] === '' || array[i] === null || array[i] === 0 || Number.isNaN(array[i]) || array[i] === false) {
      continue;
    } else { result.push(array[i]); }// if the element does not satisfy the condition, push the value into the result array
  }
  return result;
}
