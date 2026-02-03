// Pass a function into another function and execute it inside.

function greet() {
  console.log("Hello!");
}

function runFunction(fn) {
  fn(); // executing the passed function
}

runFunction(greet);
