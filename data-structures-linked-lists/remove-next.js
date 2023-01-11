/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const newList = list.next.next;
    list.next = newList;
  }

}
