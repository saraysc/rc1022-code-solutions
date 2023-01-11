/* exported getLength */

function getLength(list) {
  let result = 1;
  while (list.next !== null) {
    result++;
    list = list.next;
  }
  return result;
}
