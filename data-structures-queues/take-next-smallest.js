/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() !== undefined) {
    let firstElement = queue.dequeue();
    let secondElement = queue.peek();
    if (secondElement === undefined) {
      return firstElement;
    }
    while (firstElement > secondElement) {
      queue.enqueue(firstElement);
      firstElement = queue.dequeue();
      secondElement = queue.peek();
    }

    return firstElement;
  }
}
