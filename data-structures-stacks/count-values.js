/* exported countValues */

function countValues(stack) {
  let number = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    number += 1;
  }
  return number;
}
