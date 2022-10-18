/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName[0] + person.lastName[0];
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
getInitialsOfPerson(lea);
