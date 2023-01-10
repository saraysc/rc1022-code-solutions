/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const element = queue.dequeue();
    return queue.enqueue(element);
  }
}
