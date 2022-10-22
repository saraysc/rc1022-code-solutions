/* exported isPalindromic */
// declare a new function 'isPalindromic' with one parameter: 'string'
// delete all the space character in the string
// reverse the string and assign it to the variable 'result'
// check if 'result' variable is strictly equal to the 'string' variable
function isPalindromic(string) {
  // replace all the space character in the string
  string = string.replaceAll(/\s/g, '');
  // reverse the string and assign it to the variable 'result'
  var result = string.split('').reverse().join('');
  // check if 'result' variable is strictly equal to the 'string' variable
  return result === string;
}
