/*
!what is slice in js

In JavaScript, slice is a method you use to take a piece of something without changing the original. Think of it like cutting a slice of pizza 🍕 and leaving the rest untouched.

It exists on arrays and strings, and it behaves almost the same in both cases.

Syntax

array.slice(start, end)

* start → index to begin slicing (inclusive)
* end → index to stop slicing (exclusive)
* Returns a new array
* Does NOT modify the original array
*/


// Example
const numbers = [1, 2, 3, 4, 5];
const part = numbers.slice(1, 4);
console.log(part);    // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5]

