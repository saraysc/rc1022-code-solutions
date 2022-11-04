var book = [{
  isbn: 12345678,
  author: 'Jake Smith',
  title: 'Javascript for beginner'
}, {
  isbn: 14725836,
  author: 'Anna Nicole',
  title: 'Javascript for Intermediate'
}, {
  isbn: 258369147,
  author: 'Maria Lara',
  title: 'Javascript for Advanced'
}];

console.log('book:', book);
console.log('type of book:', typeof book);
var stringfied = JSON.stringify(book);
console.log('stringified array: ', stringfied);
console.log('type of stringfied:', typeof stringfied);

var student = JSON.stringify({ 'Number id': 147258, 'String name': 'Maria' });
console.log('student:', student);
console.log('type of student:', typeof student);

var obj = JSON.parse(student);
console.log('student parsed:', obj);
console.log('type of student parsed:', typeof obj);
