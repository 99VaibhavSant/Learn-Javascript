/*
!What Are Data Types
In JavaScript, every value has a type.
These types define what kind of data is being stored --a number, text , boolean , object, etc.

There are types categories:
    *Primitive types -- stored directly.
    *Reference types -- stored as memory references.
*/

/*
! Primitive Data Types 
| Data Type       | Description                           | Example                 |
| --------------- | ------------------------------------- | ----------------------- |
| **`string`**    | Represents text                       | `"Hello World"`         |
| **`number`**    | Numeric values (integers & decimals)  | `42`, `3.14`            |
| **`boolean`**   | Logical values                        | `true`, `false`         |
| **`null`**      | Intentional absence of value          | `null`                  |
| **`undefined`** | Variable declared but not assigned    | `undefined`             |
| **`symbol`**    | Unique and immutable identifier (ES6) | `Symbol("id")`          |
| **`bigint`**    | Large integers beyond `Number` limit  | `12345678901234567890n` |
*/

let name = "JavaScript";   // string
let age = 25;             // number
let isFun = true;         // boolean
let data = null;          // null
let value;                // undefined
let id = Symbol("id");    // symbol
let bigNum = 12345678901234567890n; // bigint


/* 
!Reference Data Types 

Reference data types store memory references, not actual values.
When copied, both variables point to the same memory location.

📌 Types of Reference Data

| Type         | Example                        |
| ------------ | ------------------------------ |
| **Object**   | `{ name: "Vaibhav", age: 26 }` |
| **Array**    | `[10, 20, 30]`                 |
| **Function** | `function greet() {}`          |
*/


let user1 = { name: "Vaibhav", age: 26 };
let user2 = user1;

user2.age = 27;

console.log(user1.age); // 27 (same reference)

/*
!🧠 Key Points
*Stored by reference
*Changes affect all references
*Compared by memory location, not value

{} === {}   // false
[] === []   // false
*/


/*
!⚔️ Primitive vs Reference Data Types

| Feature              | Primitive Data Types                                                | Reference Data Types           |
|----------------------|---------------------------------------------------------------------|-------------------------------|
| Stored as            | Actual value                                                        | Memory reference              |
| Copied by            | Value                                                               | Reference                     |
| Mutable              | ❌ No (immutable)                                                   | ✅ Yes (mutable)               |
| Compared by          | Value                                                               | Memory address                |
| Stored in memory     | Stack                                                               | Heap                          |
| Examples             | string, number, boolean, null, undefined, symbol, bigint            | object, array, function       |
*/


//!🧪 Example: Copy Behavior
//!✅ Primitive (Copied by Value)

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20



//!🔁 Reference (Copied by Reference)

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


/*
!Typeof Operator 
Used to check the data type of a value.

📌 Syntax
typeof value

🧪 typeof Results Table
| Value           | `typeof` Result |
| --------------- | --------------- |
| `"Hello"`       | `"string"`      |
| `42`            | `"number"`      |
| `true`          | `"boolean"`     |
| `undefined`     | `"undefined"`   |
| `null`          | `"object"` ❗   |
| `Symbol("id")`  | `"symbol"`      |
| `123n`          | `"bigint"`      |
| `{}`            | `"object"`      |
| `[]`            | `"object"`      |
| `function() {}` | `"function"`    |
*/


/*
!Type Coercion(Auto-Conversion)
| Expression      | Result | Explanation                                |
| --------------- | ------ | ------------------------------------------ |
| `"5" + 1`       | `"51"` | `number` → `string` (string concatenation) |
| `"5" - 1`       | `4`    | `string` → `number`                        |
| `true + 1`      | `2`    | `true` → `1`                               |
| `null + 1`      | `1`    | `null` → `0`                               |
| `undefined + 1` | `NaN`  | `undefined` → `NaN`                        |


!🧠 Why This Happens?
* + prefers string concatenation
* -, *, / force numeric conversion
* true → 1, false → 0
* null → 0
* undefined → NaN
 */ 

/*
!⚠️ Tricky Examples (Interview Favorites)
"5" + true   // "5true"
"5" - true   // 4
[] + []      // ""
[] + {}      // "[object Object]"
{} + []      // 0 (depends on context)


!====================================================================!
| Expression   | Result              | Reason                      |
| ------------ | ------------------- | --------------------------- |
| `"5" + true` | `"5true"`           | String concatenation        |
| `"5" - true` | `4`                 | Numeric conversion          |
| `[] + []`    | `""`                | Empty string + empty string |
| `[] + {}`    | `"[object Object]"` | String coercion             |
| `{}` + `[]`  | `0`                 | `{}` treated as block       |
*/


/*
!Loose vs Strict Equality
* == Compares value with type conversion 
* === Compares value+types (no conversion)

!⚔️ == vs === (Quick Look)
| Operator | Type Conversion | Comparison   |
| -------- | --------------- | ------------ |
| `==`     | ✅ Yes           | Value only   |
| `===`    | ❌ No            | Value + Type |
*/


/*
!NaN -Not a number 
 typeof NaN    //"number"

Even though is means "Not a nunber", NaN is actually of type number 
This is because operations like 0 / 0 or parseInt ("abc") still produce a numeric result-just an invalid one. 
 */

/*
!Truthy and Falsy Values 

* Falsy values:
false , 0 , "" , null , undefined , NaN

* Everything else is truthy, including:
"0" , "false" , [] , {} , function(){}

*/


if ("0") {
  console.log("Truthy"); // ✅ runs
}

if ([]) {
  console.log("Truthy"); // ✅ runs
}

if (0) {
  console.log("Won't run"); // ❌
}


/*
!⚠️ Common Interview Traps

*Boolean("false"); // true
*Boolean([]);      // true
*Boolean({});      // true
*Boolean(0);       // false
*/



//! Write a function isEmpty(value) that checks if a given value is null , undefined or ""

function isEmpty(value) {
  return value === null || value === undefined || value === "";
}

isEmpty(null);        // true
isEmpty(undefined);   // true
isEmpty("");          // true

isEmpty(0);           // false
isEmpty(false);       // false
isEmpty([]);          // false
isEmpty("Hello");     // false
