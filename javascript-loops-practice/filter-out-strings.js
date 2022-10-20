/* exported filterOutStrings */
function filterOutStrings(values) {
  var result = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      result.push(values[i]);
    }
  } return result;
}
filterOutStrings([1, 'a', 'b', 2, 3, 'c']);
