/*

! What is Spread Operator in JavaScript ?

The spread operator (...) in JavaScript is a syntax that allows you to expand or "spread out" elements from an iterable (like an array or object) into individual elements.


*/


//! 1️⃣ Spread with Arrays
// Copy an array (without changing original)

let nums = [1, 2, 3];
let copy = [...nums];

console.log(copy); // [1, 2, 3]

//👉 Unlike =, this creates a new array.


//! Merge arrays

let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]


//! Add items while copying

let numbers = [2, 3, 4];
let newNumbers = [1, ...numbers, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]

