/*
! What is splice in js?

splice() in JavaScript is an array method that lets you add, remove, or replace elements in place (it mutates the original array).

Think of it as a Swiss-army knife for arrays 🧰

Basic syntax
* array.splice(start, deleteCount, item1, item2, ...)

! Parameters
* start → index where changes begin
* deleteCount → how many elements to remove
* item1, item2, ... → items to insert (optional)

! Return value
* An array of the removed elements

*/


//! Examples
// Remove elements

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);

console.log(arr); // [1, 2, 4, 5]

//Removes 1 element at index 2 (the value 3).


//! Add elements
const arr1 = [1, 2, 5];
arr1.splice(2, 0, 3, 4);
console.log(arr1); // [1, 2, 3, 4, 5]
// Adds 3 and 4 at index 2, removes nothing.


//! Replace elements
const arr2 = [1, 2, 3];
arr2.splice(1, 1, 99);
console.log(arr2); // [1, 99, 3]
// Replaces 2 with 99.

// ! Capture removed elements
const arr3 = ["a", "b", "c"];
const removed = arr3.splice(1, 1);
console.log(removed); // ["b"]
console.log(arr3);     // ["a", "c"]


// ! Negative index
const arr4 = [1, 2, 3, 4];
arr4.splice(-1, 1);
console.log(arr4); // [1, 2, 3]
// Negative start counts from the end.

