/* exported isAnagram */
// declare a new function 'isAnagram', with two parameters: 'firstString' and 'secondString'
// replace all the space characters of 'firstString', split it so it can store the values in an array, sort it so it can
// organize the elements in alphabetic order and join it so its a string again. store the result into the 'first' variable
// do the same thing to the 'secondString' and store it in 'second' variable
// if 'first' is strictly equal to 'second', return true. Else, return false.
function isAnagram(firstString, secondString) {
  // replace all the space characters of 'firstString', split it so it can store the values in an array, sort it so it can
// organize the elements in alphabetic order and join it so its a string again. store the result into the 'first' variable
  var first = firstString.replaceAll(' ', '').split('').sort().join('');
  // repeat the process to 'secondString' and store the result into the 'second' variable
  var second = secondString.replaceAll(' ', '').split('').sort().join('');
  // check if 'first' is strictly equal to 'second'. if it is, return true. Else, return false.
  if (first !== second) {
    return false;
  } else {
    return true;

  }
}
