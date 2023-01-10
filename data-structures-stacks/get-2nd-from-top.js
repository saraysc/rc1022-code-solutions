/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const element = stack.peek();
  stack.pop();

  const result = stack.peek();

  stack.push(element);
  return result;

}
