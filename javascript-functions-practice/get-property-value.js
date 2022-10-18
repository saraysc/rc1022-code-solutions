/* exported getPropertyValue */
function getPropertyValue(object, key) {
  return object[key];
}
var lea = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};
getPropertyValue(lea, 'occupation');
