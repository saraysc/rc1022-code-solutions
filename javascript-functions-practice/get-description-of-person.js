/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  return person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
}
var lea = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};
getDescriptionOfPerson(lea);
// "Lea Verou is a software developer from Lesbos, Greece."

var tim = {
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England'
};
getDescriptionOfPerson(tim);
// "Tim Berners-Lee is a computer scientist from London, England."
