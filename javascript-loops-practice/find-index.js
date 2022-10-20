/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}
findIndex([9, 8, 3], 4);
