/* exported reverseWords */
function reverseWords(string) {
  var result = '';
  var array = [];
  string = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    for (var m = string[i].length - 1; m >= 0; m--) {
      result += string[i][m];
    } array.push(result);
    result = '';
  } return array.join(' ');
}
