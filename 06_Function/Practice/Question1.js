// What the different between function declaration and expression in terms of hoisting ?


// ! 1️⃣ Function Declaration (✅ fully hoisted)

sayHello();

function sayHello() {
  console.log("Hello");
}

/*

! What hoisting does here

    JavaScript moves the entire function to the top of the scope
    You can call it before it’s written

*/

/*
!  2️⃣ Function Expression (❌ NOT hoisted like a function)
sayHi(); // ❌ TypeError

var sayHi = function () {
  console.log("Hi");
};


What gets hoisted?
Only the variable name is hoisted
The function value is NOT


! Behind the scenes
<------------------------------------->
var sayHi;        // hoisted
sayHi();          // ❌ undefined()

sayHi = function () {
    console.log("Hi");
    };
    var sayHi;        // hoisted
    sayHi();          // ❌ undefined()

    sayHi = function () {
        console.log("Hi");
        };
<------------------------------------->
👉 Error: sayHi is not a function

*/


// 3️⃣ Function Expression with let / const (❌ even stricter)


sayHey(); // ❌ ReferenceError

const sayHey = function () {
  console.log("Hey");
};

/*
!Why?

let / const are in the Temporal Dead Zone (TDZ)
You cannot access them before initialization
👉 Error happens before execution even reaches the function

*/



/*

🔑 One-line Rule (remember this)

🧠 Function declarations are hoisted with their body
🧠 Function expressions are hoisted like variables, not functions

*/



/*
📊 Quick Comparison Table

| Feature                         | Function Declaration  | Function Expression  |
| ------------------------------- | --------------------- | -------------------- |
| Hoisted?                        | ✅ Yes (full function) | ❌ No (only variable) |
| Callable before definition?     | ✅ Yes                 | ❌ No                 |
| Depends on `var / let / const`? | ❌ No                  | ✅ Yes                |
| Common use                      | Normal functions      | Callbacks, closures  |

*/
