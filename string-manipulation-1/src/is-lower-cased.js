/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i].match(/[a-zA-Z]/)) {
      return false;
    }
  } return true;
}
