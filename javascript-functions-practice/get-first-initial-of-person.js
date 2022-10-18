/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName[0];
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
getFirstInitialOfPerson(lea);
