/* exported numVowels */
function numVowels(string) {
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  var count = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (vowels[string[i]]) {
      count++;
    }
  } return count;
}
