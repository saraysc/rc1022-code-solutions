/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const element = queue.dequeue();
  if (queue.peek() === undefined) {
    return element;
  }
  if (queue.peek() !== undefined) {
    queue.enqueue(element);
  }
  const result = queue.dequeue();
  return result;
}
