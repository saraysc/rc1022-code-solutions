/* exported isUpperCased */
// declare a function 'isUpperCased' with the parameter 'word'
// loop through the word.length parameter
// check if any of the elements are in lowercase. if they are, return false
// else, return true
function isUpperCased(word) {
  // loop through the word parameter
  for (var i = 0; i < word.length; i++) {
    // check if the current element of the array is in lowercase. if it is, return false
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  } return true;
}
