/*
! What is function in JavaScript?

A function in JavaScript is a block of reusable code that performs a specific task.
You write it once, and you can call (use) it many times whenever needed.

Think of a function like a vending machine:
* Input: you give money + item code
* Output: it gives you the item
* Logic: hidden inside
*/

// ! 🔹 Basic Function Syntax

function greet() {
  console.log("Hello!");
}
greet(); // calling the function

/*
📌 Explanation
* function → keyword
* greet → function name
* {} → function body
* greet() → runs the function

*/

/*
! Store function like variable in JavaScript ?

In JavaScript, a function variable usually means storing a function inside a variable.
Functions are first-class citizens in JS — you can treat them like normal values 😎

!🤔 Why use function variables?

* Because you can:
* Pass functions as arguments
* Return functions from other functions
* Store them in objects or arrays

*/

//! ✅ Function stored in a variable

let greet = function () {
  console.log("Hello!");
};

greet(); // Hello!

/*
!👉 Here:
*greet is a variable
*It holds a function
*Calling greet() runs the function
*/

/*
! What is Array function in JavaScript ?

In JavaScript, array functions are built-in methods that help you add, remove, search, loop, and transform arrays.

Think of them as superpowers for arrays 💪😄
*/

//! Array function Example
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5

/*
! What is Funcction with Argument in JavaScript ?

A function with arguments is a function that receives values (inputs) when it is called and uses those values inside its code.

Think of arguments as data you pass into a function so it can work dynamically instead of doing the same thing every time.

* 🔹 Simple Definition
👉 Arguments are values passed to a function
👉 Parameters are variables that receive those values


* 🔹 Basic Syntax (JavaScript)

function functionName(parameter1, parameter2) {
  code using parameters
}

*/

//! 🔹 Example 1: One Argument

function greet(name) {
  console.log("Hello " + name);
}

greet("Vaibhav");
greet("Amit");

//! 🔹 Example 2: Multiple Arguments

function add(a, b) {
  console.log(a + b);
}

add(5, 3);
add(10, 20);

//! 🔹 Example 3: Arguments Used for Logic

function checkAge(age) {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}

checkAge(20);
checkAge(15);

/*
🔹 Why Use Functions with Arguments? 🤔

* ✅ Reuse code
* ✅ Make code flexible
* ✅ Avoid repeating logic
* ✅ Write clean & readable programs
*/

/*
! 🔹 What are Default Parameters?
Default parameters are values given to function parameters that are used when no argument is passed (or when undefined is passed).

👉 So the function still works even if you forget to send a value.

function functionName(param = defaultValue) {
  code
}
*/

//! 🔹 Example 1: Basic Default Parameter

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Vaibhav");
greet();

//! 🔹 Example 2: Multiple Default Parameters

function add(a = 0, b = 0) {
  console.log(a + b);
}

add(5, 10); // 15
add(5); // 5
add(); // 0

//! 🔹 Example 3: Default Parameter in Real Life

function orderCoffee(type = "Normal Coffee", sugar = 1) {
  console.log(`Coffee: ${type}, Sugar: ${sugar}`);
}

orderCoffee("Cold Coffee", 2);
orderCoffee("Espresso");
orderCoffee();

//! 🔹 Important Rule ⚠️
// Default parameters work only when the argument is undefined, not with null.

function test(x = 10) {
  console.log(x);
}

test(); // 10
test(undefined); // 10
test(null); // null





