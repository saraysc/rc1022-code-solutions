var student = {
  firstName: 'Sara',
  lastName: 'Choi',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'assistant';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'kia',
  model: 'niro',
  year: 2020
};

vehicle['color'] = 'blue';
vehicle['isCovertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isCovertible"]:', vehicle['isCovertible']);
console.log('value of vehicle object:', vehicle);

var pet = {
  name: 'blue',
  type: 'poodle'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
