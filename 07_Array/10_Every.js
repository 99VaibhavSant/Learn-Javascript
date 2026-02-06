/*

! What is Every method in javascript ?

every() is an array method that checks whether all elements in an array satisfy a condition.

👉 It returns true if every element passes the test
👉 It returns false if even one element fails

*/

// Simple Example
let numbers = [2, 4, 6, 8];

let result = numbers.every(function (num) {
  return num % 2 === 0;
});

console.log(result); // true

// ✅ All numbers are even → true



// Example where it returns false
let numbers1 = [2, 4, 5, 8];

let result1 = numbers1.every(num => num % 2 === 0);

console.log(result1); // false

// ❌ 5 is odd → fails the condition → false
