/*
! 📦 What is an Array in JavaScript?

An array is a container that can store multiple values in one variable.
Think of it like a box with numbered slots 🧺

! let fruits = ["apple", "banana", "mango"];

* fruits → array name
* "apple", "banana", "mango" → values
* Each value has a position (index)

*/

//!  🔢 Array Index (VERY IMPORTANT)
//JavaScript arrays start counting from 0, not 1.

let fruits = ["apple", "banana", "mango"];

fruits[0]; // "apple"
fruits[1]; // "banana"
fruits[2]; // "mango"


/*
📌 Index = position number
📌 First item is always at index 0
*/

/*
! 🧠 Why use an Array?

Instead of this ❌:

    let fruit1 = "apple";
    let fruit2 = "banana";
    let fruit3 = "mango";

    We do this ✅:

    let fruits = ["apple", "banana", "mango"];

* 👉 Cleaner
* 👉 Easier to manage
* 👉 Looping becomes simple

*/


/*
! Yes ✅ arrays are mutable.

That means you can change an array after it’s created—its elements, length, or order—without making a new array.

*/

// ! Example (JavaScript)

let arr = [1, 2, 3];

// change an element
arr[0] = 100;
console.log(arr); // [100, 2, 3]

// add an element
arr.push(4);
console.log(arr); // [100, 2, 3, 4]

// remove an element
arr.pop();
console.log(arr); // [100, 2, 3]

