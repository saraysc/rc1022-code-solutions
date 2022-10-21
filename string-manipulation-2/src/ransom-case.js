/* exported ransomCase */
// declare a new function 'ransomCase' with one parameter: 'string'
// the return value should be the string alternating between lower case and uppercase
function ransomCase(string) {
  // transform the string value in lowercase and split it so the string can be an array
  string = string.toLowerCase().split('');
  // loop through the string
  for (var i = 1; i < string.length; i += 2) {
    // transform the odd indexes of string in upper case
    string[i] = string[i].toUpperCase();
  }
  // return the value of string
  return string.join('');
}
