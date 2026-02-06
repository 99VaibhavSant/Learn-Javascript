/*

!What is for...in loop (for objects)?

The for...in loop is used to loop through the keys (properties) of an object.

Syntax

for (let key in object) {
  code using key and object[key]
}

 */


// Example with an object

let person = {
  name: "Vaibhav",
  age: 22,
  city: "Delhi"
};

for(let key in person){
    console.log(key , person[key]);
}

/*
Output
name Vaibhav
age 22
city Delhi

! What’s happening here?
* key → property name (name, age, city)
* person[key] → value of that property

*/

/*
! Why use for...in?

Because objects are not iterable like arrays (you can’t use forEach, map, etc. directly).

* Read all object keys
* Access values dynamically
* Work with unknown object structures
*/


