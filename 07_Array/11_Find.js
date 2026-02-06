/*

! What is Find ?

The find() method in JavaScript is used to get the first element in an array that satisfies a condition.
If nothing matches, it returns undefined.

!Basic idea
👉 It searches the array
👉 Returns only the first matching element
👉 Does not change the original array

*/

// Simple example

let numbers = [10, 20, 30, 40, 50];

let result = numbers.find(num => num > 25);

console.log(result); // 30

// 💡 As soon as 30 matches the condition, find() stops searching.


//! Example with objects (very common use)
let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Rahul" }
];

let user = users.find(u => u.id === 2);

console.log(user);
// { id: 2, name: "Riya" }


//! If no match is found

let nums = [1, 3, 5];

let result1 = nums.find(n => n % 2 === 0);

console.log(result1); // undefined


/*

!find() vs filter()

| find()                       | filter()                        |
| ---------------------------- | ------------------------------- |
| Returns **one element**      | Returns an **array**            |
| Stops at first match         | Checks all elements             |
| Returns value or `undefined` | Returns empty array if no match |
*/


//! Example
numbers.find(n => n > 25);    // 30
numbers.filter(n => n > 25); // [30, 40, 50]

/*

When to use find()

* ✔ You need only one matching item
* ✔ Searching for an object by id
* ✔ Want better performance than filter() for single result

*/

