/* exported isVowel */
function isVowel(char) {
  var vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  var uppercaseChar = char.toLowerCase();
  for (var key in vowel) {
    if (uppercaseChar === key) {
      return true;
    }
  } return false;
}
