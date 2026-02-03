// What is higher-order function?


function greet() {
  console.log("Hello!");
}

function higherOrder(fn) {
  fn(); // calling the function passed in
}

higherOrder(greet);

/*

! What’s happening (super simple):

* greet 👉 just a normal function
* higherOrder 👉 higher-order function
* Why? 👉 because it receives a function (greet)

! 🧠 Think like this:
“I am passing a function as data”
 */




