/*
! What are Operators?
Operators are special symbols or keywords in JavaScript used to perform operations on values.

They are used in:
- Calculations
- Comparisons
- Logical operations
- Assignments
- Type checks

Think of operators as the *verbs* of your code — they act on data.
*/

// !📦 Types of Operators in JavaScript

/*
1️⃣ Arithmetic Operators

* +   // Addition
* -   // Subtraction
* *   // Multiplication
* /   // Division
* %   // Modulus (remainder)
* **  // Exponentiation (power)
*/

//! Example

let a = 10 ;
let b = 20;
console.log(a+b)  //12
console.log(a%b) // 1
console.log(2 ** 3); //8 


/*
!2️⃣ Assignment Operators

Assign values to variables.
* =    // Assign
* +=   // Add and assign
* -=   // Subtract and assign
* *=   // Multiply and assign
* /=   // Divide and assign
*/

let x = 5;
x += 2; // x = 7
// console.log(x = x * 2);


/*
!3️⃣ Comparison Operators

Used to compare values (returns true or false)

* ==   // Equal (value)
* ===  // Strict equal (value + type)
* !=   // Not equal
* !==  // Strict not equal
* >    // Greater than
* <    // Less than
* >=   // Greater or equal
* <=   // Less or equal
*/


/*
!4️⃣ Logical Operators
* &&  // AND
* ||  // OR
* !   // NOT

| Operator | Name | Description                                    | Example         | Result                                               |       |   |        |        |
| -------- | ---- | ---------------------------------------------- | --------------- | ---------------------------------------------------- | ----- | - | ------ | ------ |
| `&&`     | AND  | Returns `true` if **both** conditions are true | `true && false` | `false`                                              |       |   |        |        |
| `        |      | `                                              | OR              | Returns `true` if **at least one** condition is true | `true |   | false` | `true` |
| `!`      | NOT  | Reverses the boolean value                     | `!true`         | `false`                                              |       |   |        |        |

*/

// !Example 
const age = 20;
const hasID = true;

age >= 18 && hasID; // true
age < 18 || hasID;  // true
!hasID;             // false


/*
!5️⃣ Unary Operators
Work on one operand

* ++  // Increment
* --  // Decrement
 */

let n = 5;
console.log(n++);
console.log(++n);

/*
!6️⃣ Ternary Operator

Shortcut for if-else
condition ? value1 : value2;
*/

let Age = 18;
let status = Age >= 18 ? "Adult" : "Minor";




/*
!7️⃣ String Operators

* +  // Concatenation
"Hello" + " World"; // "Hello World"
*/

/*
!8️⃣ Special Operators

typeof   // Type of value
instanceof // Object type check

typeof 42;            // "number"
typeof "Hello";       // "string"
typeof true;          // "boolean"
typeof function(){}   //"function"

[] instanceof Array;  // true
{} instanceof Object; // true

*/


/*
? Common Confusions 

* "5" + 1 is "51" (string  concet), but "5" - 1 is 4 (number is subtract)
* !!value is a quick trick to convert anything into a boolean
* Pre-increment (++i) vs post-increment(i++) return different results
*/


/*
! ⚠️ Important Note

* With +, JavaScript behaves differently if strings are involved:

*/

true + "1"   // "true1"
false + "1"  // "false1"


/*

! 🧠 Interview Tip
If you want to avoid surprises, explicitly convert:

*/

Number(true) + Number(false); // 1



//! Practice Zone 

console.log("10" + 1)         //101
console.log("10" - 1)         //9
console.log(true  + false);   //1
console.log(!!"vaibhav");     //true  


