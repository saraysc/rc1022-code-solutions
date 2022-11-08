function ExampleConstructor() {

}
console.log('value of prototype:', Object.getPrototypeOf(ExampleConstructor));
console.log('typeof prototype:', typeof Object.getPrototypeOf(ExampleConstructor));

var result = new ExampleConstructor();
console.log('value of result:', result);
console.log('instanceof result:', result instanceof ExampleConstructor);
