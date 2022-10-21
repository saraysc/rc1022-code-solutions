/* exported capitalizeWord */
// declare a new function 'capitalizeWord' with one parameter: 'word'
// if the word in lowercase is strictly equal to 'javascript', return 'JavaScript'
// else, return the first letter of the word in upperCase and the rest of the characters in lowercase
function capitalizeWord(word) {
  // if the word in lowercase is strictly equal to 'javascript', return 'JavaScript'
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    // else, return the first letter of the word in upperCase and the rest of the characters in lowercase
    word = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
    return word;
  }
}
