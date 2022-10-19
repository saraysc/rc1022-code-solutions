var firstNumber = 9;
var secondNumber = 7;
var thirdNumber = 5;
var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);

console.log('Maximum value:', maximumValue);

var heroes = ['hulk', 'thor', 'spider-man', 'wonder-woman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('Random index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random Hero:', randomHero);

var library = [{ title: 'Functional Programming', author: 'Jack Widman' },
  { title: 'Phyton Programming', author: 'Cory Reed' },
  { title: 'Fundamental Programming', author: 'Svetlin Nakov' }
];
var lastBook = library.pop();

console.log('Last Book of the array:', lastBook);

var firstBook = library.shift();
console.log('First Book of the array:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Sara Choi';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('First Name in Uppercase:', sayMyName);
