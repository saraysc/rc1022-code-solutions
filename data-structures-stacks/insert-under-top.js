/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const element = stack.peek();
    stack.pop();
    stack.push(value);
    stack.push(element);
  }
  return stack;
}
