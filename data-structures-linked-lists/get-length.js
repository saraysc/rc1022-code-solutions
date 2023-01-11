/* exported getLength */

function getLength(list) {
  let result = 1;
  let otherList = list;
  while (otherList.next !== null) {
    result++;
    otherList = otherList.next;
  }
  return result;
}
