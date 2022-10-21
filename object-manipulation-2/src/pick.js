/* exported pick */
// declare a function 'pick' with two parameters: 'source' and 'keys'
// assign an empty obj to a new variable 'result'
// if we can find the element of keys array in the property of source obj
// save the corresponding key value pair of source object in to the result object
function pick(source, keys) {
  var result = {};
  // loop through all the key of source object
  for (var key in source) {
    // check if the source object has the element of the keys array
    if (keys.indexOf(key) !== -1 && source[key] !== undefined) {
      // if we find the element of 'keys' array in the source obj, save the corresponding
      // key value pair of source obj into the result object
      result[key] = source[key];
    }
  } return result;
}
