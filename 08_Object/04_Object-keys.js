/*
! What does Object.keys() do?
👉 Object.keys() returns an array of an object’s own property names (keys).

Syntax
Object.keys(object)

*/

// Example
let user = {
  name: "Vaibhav",
  age: 22,
  city: "Delhi"
};

let keys = Object.keys(user);
console.log(keys);

