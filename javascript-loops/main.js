/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber >= 1 && currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber >= 2 && currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var double = [];
  for (var i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2);
  } return double;
}

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  } return keys;
}

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  } return values;
}
