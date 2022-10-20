/* exported getStudentNames */
function getStudentNames(students) {
  var result = [];
  for (var i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;

}
var students = [
  {
    name: 'Shrek'
  },
  {
    name: 'Donkey'
  },
  {
    name: 'Fiona'
  }
];
getStudentNames(students);
