/*

!What is a Higher-Order Function in JavaScript?

✅ Definition

A higher-order function is a function that takes another function as an argument OR returns a function.

(If it does either one, it’s higher-order.)

*/

// ! 1️⃣ Function Passed as an Argument


function greet() {
  console.log("Hello!");
}

function higherOrder(fn) {
  fn();
}

higherOrder(greet);

