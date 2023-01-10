/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    let element = queue.dequeue();
    for (let i = 0; i < index; i++) {
      queue.enqueue(element);
      element = queue.dequeue();
    } return element;
  }

}
