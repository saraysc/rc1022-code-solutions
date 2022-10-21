/* exported chunk */
function chunk(array, size) {
  var result = [];
  var value = [];
  if (size > array.length) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      value.push(array[i]);

      if (value.length === size) {
        result.push(value);
        value = [];
      }
    } if (value.length > 0) { result.push(value); }
    return result;
  }
}
