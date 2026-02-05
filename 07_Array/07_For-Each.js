/*

! what is for each loop
A forEach loop is a method in JavaScript that lets you execute a function for each element in an array. It's a cleaner, more readable alternative to traditional for loops.

or

forEach() is an array method used to run a function once for every element in an array.

});

Basic Syntax
array.forEach(function(element, index, array) {
  code here
});

! Parameters (in order)
* element → current value
* index → position (optional)
* array → original array (optional)

*/

//! Simple Example

let numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
  console.log(num);
});


// ! Using index
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(item, index) {
  console.log(index, item);
});

//! Arrow function version (most common)

let nums = [10, 20, 30];
nums.forEach(num => console.log(num * 2));



//! Real-life example (sum of array)

let scores = [10, 20, 30];
let total = 0;

scores.forEach(score => {
  total += score;
});

console.log(total); // 60



/*
! Important things to remember ⚠️

✔ Works only on arrays
✔ Does not return anything (returns undefined)
❌ You cannot break or continue like a loop

let result = [1,2,3].forEach(n => n * 2);
console.log(result); // undefined

*/
