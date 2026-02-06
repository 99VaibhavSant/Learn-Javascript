/*
! What is object destructuring?
* Object destructuring lets you take values out of an object and store them in variables, in a clean and short way.

* Instead of writing long dot notation again and again, you “unpack” the object.
*/

//! Simple example (Without destructuring)

// let user = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// };

// let name = user.name;
// let age = user.age;

// console.log(name, age);


//! Simple Example(With destructuring)

// let user = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// };

// let { name, age } = user;

// console.log(name, age);


//! Rename variables while destructuring

let user = {
  name: "Rahul",
  age: 22
};

let { name: userName, age: userAge } = user;

console.log(userName, userAge);


// Default values
// let user = {
//   name: "Rahul"
// };

// let { name, age = 18 } = user;

// console.log(age); // 18


