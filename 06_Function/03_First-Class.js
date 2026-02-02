/*
! What is a First-Class Function in JavaScript?

In JavaScript, functions are first-class citizens.

! ✅ Definition

A first-class function is a function that is treated like any other value — it can be stored in a variable, passed as an argument, returned from another function, and stored in data structures.

*/

/*
! Why JavaScript Functions Are First-Class

Because in JS, functions can do all of this 👇

*/

// ! 1️⃣ Function Stored in a Variable

const greet = function () {
  console.log("Hello!");
};

greet(); // Hello!


// ! 2️⃣ Function Passed as an Argument

function sayHi() {
  console.log("Hi!");
}

function callFunction(fn) {
  fn();
}
callFunction(sayHi);


// 3️⃣ Function Returned from Another Function

function outer() {
  return function inner() {
    console.log("Returned function");
  };
}

const fn = outer();
fn();

// ✔ Function returned from a function

/*
!🔹 One-Line Interview Answer 🎯

In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures like any other value.

*/


