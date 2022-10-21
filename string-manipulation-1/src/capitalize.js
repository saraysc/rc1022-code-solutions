/* exported capitalize */
// declare a new function 'capitalize' with one argument: 'word'
// use the uppercase method on the first character of the array
// use the lowercase method on the last characters of the array
// concatenate the uppercased and lowercased strings and reassign it to the variable 'word'
// return 'word'
function capitalize(word) {
  // capitalize the first character of 'word' and transform the rest of the character in lowercase
  word = word[0].toUpperCase() + word.slice(1).toLowerCase();
  // return 'word'
  return word;
}
