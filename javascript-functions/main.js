function convertMinutesToSecond(minutes) {
  return minutes * 60;
}
var fiveMinutesToSeconds = convertMinutesToSecond(5);
console.log('5 minutes converted to seconds:', fiveMinutesToSeconds);

function greet(name) {
  return 'Hey, ' + name;
}
var greetSara = greet('Sara');
console.log('Greet Function Result:', greetSara);

function getArea(width, height) {
  return width * height;
}
var totalArea = getArea(17, 42);
console.log('Total Area:', totalArea);

function getFirstName(person) {
  return person.firstName;
}
var objFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First Name:', objFirstName);

function getLastElement(array) {
  return array[array.length - 1];
}
var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element of the array:', lastElement);
