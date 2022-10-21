/* exported capitalizeWords */
// declare a new function 'capitalizeWords' with one parameter: 'string'
// the return value should be the first character of each word of string in Upper case and the rest of the character in lowercase
// for that, we'll first convert all the string characters in lowercase and split it so the value of string can be stored in an array of substring
// then we'll loop through the string and use the UpperCase() method on the first character of the string[i] and concatenate with the rest of the characters of string[i]
// after we're done iterating, we'll join() the string so it can concatenate all of the elements of the array
function capitalizeWords(string) {
  // transform the string value in lowercase and split it so the string can be an array of sub string
  string = string.toLowerCase().split(' ');
  // loop through the string
  for (var i = 0; i < string.length; i++) {
  // transform the first case in uppercase and concatenate with the rest of the characters of string[i]
    string[i] = string[i][0].toUpperCase() + string[i].slice(1, string[i].length);
  }
  // concatenate all the elements of string and return the value
  return string.join(' ');
}
