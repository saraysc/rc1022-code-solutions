/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
getFullNameOfPerson(lea);
