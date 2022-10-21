/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var first = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = first;
  return string.join('');
}
