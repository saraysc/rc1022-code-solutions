const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number=>number*2);
console.log('numbers multiplied by 2:', doubled);

const prices = numbers.map(number=>"$" + number.toFixed(2));
console.log('Prices array:', prices);

const upperCased = languages.map(language=>language.toUpperCase());
console.log('Uppercased strings:', upperCased);

const firstLetter = languages.map(language=> language[0]);
console.log('First letters:', firstLetter)
