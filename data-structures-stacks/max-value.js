/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let peek = stack.peek();
    while (stack.peek() !== undefined) {
      if (stack.peek() > peek) {
        peek = stack.peek();
      }
      stack.pop();
    } return peek;
  }
}
