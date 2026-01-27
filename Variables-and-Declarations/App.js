/*

* ? What are Variables?

Variables are containers that hold data.
They help us store, reuse and update informations in JavaScript -- from simple values like numbers to complex data like arrays and objects.

Think of a variable as a box with a name on it. you can put something inside it (a value) , and later check or change what's inside.

In JavaScript, you create there boxes using keywords: var , let and const.

Var, let and const - Line-by-line Comparison

!var -Old and risky
**Scoped to functions, not blocks
*Can be redeclared and reassigned 
*Hoisted to the top with undefined value   
*/

var score = 10
var score = 20 //OK
console.log(score);  //output is 20
/*
!What’s happening?
*var allows redeclaration in the same scope.
*The second line simply overwrites the first value.
*/

/*
! let - Modern and safe 
*Scoped to block ({})
*Can be reassigned but not redeclared 
*Hoisted, but stays in the Temporal  Dead Zone (TDZ)
*/

let age = 25;
age = 30; //Is ok 
// let age = 40; //Error (Same block)


/*
! const - Constant values 
*Scoped to blocks
*Cannot be reassigned or redeclared
*TDZ applies here too
*/

const PI = 3.14;
// PI = 3.14159; // Error 

/* 
Why this throws an error
const means constant
Once you assign a value to a const variable, you cannot reassign it
JavaScript protects it to avoid accidental changes
*/

//But: If const holds an object/array , you can still change its contents:

const student = {name : "Vaibhav"}
student.name = "Naruto" // OK
// student = {}; //error


/*
!Why this happens

*const locks the reference, not the value inside
*student always points to the same object in memory
*You can change properties of that object
*You cannot point student to a new object

!Think of it like this 👇
*📦 student is a sealed label on a box
*You can change what’s inside the box, but you can’t replace the box
*/

/*
!🔥Scope in Real life

*Block Scope → Code inside {} like in loops, if , etc.
*Function Scope → Code inside a function
*let and const follow block scope.
*var ignores block scope — which leads to bugs.
*/

{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError

/*
| Keyword | Block Scope | Reassign | Redeclare |
| ------- | ----------- | -------- | --------- |
| `var`   | ❌ No        | ✅ Yes    | ✅ Yes |
| `let`   | ✅ Yes       | ✅ Yes    | ❌ No |
| `const` | ✅ Yes       | ❌ No     | ❌ No |
*/

/*
!🧨 Hoisting
JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.

But:
*var is hoisted and set to undefined 
*let and const are hoisted but not initialized -- so accessing them early gives ReferenceError
*/

console.log(a); //undefined
var a = 10;


console.log(a); //ReferenceError
let  b = 10;