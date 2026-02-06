/*
! What is Object.entries()?
Object.entries() is a built-in JavaScript method that converts an object into an array of key–value pairs.

Syntex
Object.entries(object)

*/

//Simple Example

const user = {
  name: "Vaibhav",
  age: 22,
  city: "Delhi"
};

const result = Object.entries(user);
console.log(result);

/*

Output

[
  ["name", "Vaibhav"],
  ["age", 22],
  ["city", "Delhi"]
]


👉 Each item is an array:
[key, value]

*/


/*
Why is it useful?

! 1. Looping over objects easily

Objects don’t have map(), filter(), etc.
Object.entries() lets you use array methods on objects.

*/

Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});


//! 2. Using map() with objects

const upperKeys = Object.entries(user).map(([key, value]) => {
  return key.toUpperCase();
});

console.log(upperKeys);



//! One-liner summary
// 👉 Object.entries() turns an object into an array of [key, value] pairs so you can loop, map, and filter it easily.
