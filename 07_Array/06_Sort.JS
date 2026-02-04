/*
! What is sort ?

sort() method in JavaScript
The sort() method is used to arrange array elements in order.

Important rule ⚠️
👉 sort() mutates (changes) the original array

Basic syntax
array.sort()
array.sort(compareFunction)

*/

/*
! Default behavior (VERY important ❗)
By default, sort() treats elements as strings and sorts them lexicographically (dictionary order).
*/

let arr = [10, 2, 5, 1];
arr.sort();

console.log(arr); //[1, 10, 2, 5]

/*
😵 Why?
Because "10" comes before "2" as strings.
*/


//! Correct way to sort numbers ✅
//! Ascending order

let nums = [10, 2, 5, 1];

nums.sort((a, b) => a - b);
console.log(nums);


//! Descending order

nums.sort((a, b) => b - a);
console.log(nums);



