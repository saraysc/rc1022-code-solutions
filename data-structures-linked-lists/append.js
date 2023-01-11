/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {

  const newList = new LinkedList(list);
  const valor = new LinkedList(value);
  newList.next = valor;

}
