/* exported omit */
// declare a new function 'omit' with two parameters: 'source' and 'keys'
// assign an empty obj to a new variable 'result'
// find the element of keys array as the property of source obj
// save all key value pair of source object that are not an element of keys array into the result object

function omit(source, keys) {
  // assign an empty obj to a new variable 'result'
  var result = {};
  // loop through all the key of source object
  for (var key in source) {
    // check if the source object has the element of the keys array
    if (keys.indexOf(key) === -1 && source[key] !== undefined) {
      // if we cant find the key of 'source' obj in the keys array, save the corresponding
      // key value pair of 'source' obj into the 'result' obj
      result[key] = source[key];
    }
  } return result;
}
