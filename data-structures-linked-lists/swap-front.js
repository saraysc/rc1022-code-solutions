/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const first = list;
    const second = list.next;
    const rest = list.next.next;
    list = second;
    list.next = first;
    list.next.next = rest;
  }
  return list;
}
