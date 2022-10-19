var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2]);

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2]);
console.log('value of colors:', colors);

var students = ['Angela', 'Maria', 'Sara', 'Ana'];
var numberOfStudents = students.length;

console.log('Thre are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudents = students[lastIndex];
console.log('The last student in the array is', lastStudents);
console.log('Value of students', students);
