/*

! What is filter() in JavaScript?

filter() is an array method that creates a new array containing only those elements that pass a test (condition).

* 👉 It does not change the original array
* 👉 It returns a new array
* 👉 The callback must return true or false

! Basic syntax

array.filter(function(element, index, array) {
    return condition;
});

* element → current item (like el)
* index → position of the item (optional)
* array → original array (optional)

*/


//! Simple Example

let nums = [1, 2, 3, 4, 5];

let evenNums = nums.filter(function(el) {
    return el % 2 === 0;
});

console.log(evenNums); // [2, 4]
console.log(nums);     // [1, 2, 3, 4, 5]

// 🔹 Only numbers that return true stay in the new array.


/*
! How filter() works (step by step)
For [1, 2, 3, 4, 5]:

| el | condition (`el % 2 === 0`) | kept? |
| -- | -------------------------- | ----- |
| 1  | false                      | ❌     |
| 2  | true                       | ✅     |
| 3  | false                      | ❌     |
| 4  | true                       | ✅     |
| 5  | false                      | ❌     |

Result → [2, 4]

*/


//! Using arrow function (modern way)

let evenNum = nums.filter(el => el % 2 === 0);


// Filter numbers greater than 10

let arr = [5, 12, 8, 130, 44];

let result = arr.filter((el)=>el>10)

console.log(result); // [12, 130, 44]


//! Filter objects

let users = [
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 21 },
  { name: "Neha", age: 19 }
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);




