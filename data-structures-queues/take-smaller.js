/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const firstElement = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstElement;
  }
  const secondElement = queue.dequeue();

  if (secondElement > firstElement) {
    queue.enqueue(secondElement);
    return firstElement;
  } else if (secondElement === firstElement) {
    queue.enqueue(secondElement);
    return secondElement;
  } else if (firstElement > secondElement) {

    queue.enqueue(firstElement);
    return secondElement;
  }
}
