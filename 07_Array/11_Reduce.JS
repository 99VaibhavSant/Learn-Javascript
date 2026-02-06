/*

! What is reduce() in JavaScript?

reduce() is a JavaScript array method that processes an array and reduces it down to a single value by applying a function to each element.

=> Basic syntax:
array.reduce(callback, initialValue)


The callback function takes four parameters:

* accumulator - the accumulated result from previous iterations
* currentValue - the current element being processed
* currentIndex - the index of the current element (optional)
* array - the array being processed (optional)
*/


//! Simple example - summing numbers:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(sum); // 15

/*
! How it works:

1 First iteration: accumulator = 0 (initial value), current = 1 → returns
2 Second iteration: accumulator = 1, current = 2 → returns 3
3 Third iteration: accumulator = 3, current = 3 → returns 6
4And so on...

*/

/*

Example 1: Sum of numbers (most common)

| acc | cur | return |
| --- | --- | ------ |
| 0   | 1   | 1      |
| 1   | 2   | 3      |
| 3   | 3   | 6      |
| 6   | 4   | 10     |

*/

// Example 2: Multiply all numbers

let nums = [1, 2, 3, 4];

let product = nums.reduce((acc, cur) => acc * cur, 1);

console.log(product); // 24



