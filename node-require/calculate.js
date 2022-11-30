const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

if (operator === 'plus') {
  console.log(add(num1, num2));
} else if (operator === 'minus') {
  console.log(subtract(num1, num2));
} else if (operator === 'times') {
  console.log(multiply(num1, num2));
} else if (operator === 'over') {
  console.log(divide(num1, num2));
}
