/*
! Why Loops?
If a task needs to be done multipletimes (e.g., priniting 1-10, going through an array, or checking each character in a string), loops are the backbone.

! 🔄 What is a Loop?

A loop is used to repeat a block of code until a condition is met.
👉 Instead of writing the same code again and again, you loop it.

! 🧠 Why use loops?

*Save time ⏱️
*Reduce repeated code
*Work with arrays & data
*Automate tasks

*/

/*
!1️⃣ for loop
*Use when you know how many times you want to loop.

! Structure
for (start; condition; update) {
  code
}

*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

/*
 * Start from i = 0
 * Run till i < 10
 * Increse i each time
 */

/*

! 🔁 What is a while loop in JS?

A while loop runs a block of code again and again as long as a condition is true.

* 👉 First it checks the condition
* 👉 If true → code runs
* 👉 If false → loop stops


! 🧠 Syntax
while (condition) {
  code to run
}

*/

//! ✅ Simple Example
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

/*
! How it works:

* i = 1
* Condition i <= 10 → true
* Print i
* Increase i
* Repeat until condition becomes false

 */

/*
! ⚠️ Important: Avoid Infinite Loop

let i = 1;
while (i <= 5) {
  console.log(i);
}

* 👉 i never changes → loop runs forever 😵

*/

//! 🧪 Real-life Example
let password = "";

while (password !== "1234") {
  password = prompt("Enter password:");
}
console.log("Access granted");

/*
! 🔁 What is a do...while loop?

=>A do...while loop:
    *Runs the code at least once
    *Then checks the condition
    *Repeats while the condition is true
👉 Condition is checked AFTER execution

! 🧠 Syntax

do {
  code to run
} while (condition);\

* ⚠️ Semicolon ; is required
*/

// ! ✅ Basic Example

let j = 1;
do {
  console.log(j);
  j++;
} while (i < 5);

//* Even if i starts wrong, the loop runs once.

/*
! 📝 One-line Definition (Interview Ready)
A do...while loop executes the code once before checking the condition, and continues while the condition is true.
*/

/*
! 🔄 while vs do...while

| Feature            | while              | do...while |
| ------------------ | ------------------ | ---------- |
| Condition check    | Before loop        | After loop |
| Runs at least once | ❌ No               | ✅ Yes      |
| Best for           | Unknown iterations | User input |

*/

/*
! 🛑 break (STOP the loop completely)

* 👉 What it does
* Immediately exits the loop
* Control jumps outside the loop

*/

// !✅ Example: break

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

/*
! 🔍 How it runs
1. i = 1
i === 3 ❌
console.log(1) ✅

2. i = 2
i === 3 ❌
console.log(2) ✅

3. i = 3
i === 3 ✅
break runs → loop stops immediately

! 🖨 Output
 1
 2
 */

/*
! ⏭ continue (SKIP current iteration)

!👉 What it does
* Skips only the current loop cycle
* Loop continues with next iteration
*/

//! ✅ Example: continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

/*
!🧠 Key idea: continue

continue skips the current loop iteration
The loop does not stop
Execution jumps to the next iteration
*/

/*
🆚 continue vs break

| Keyword    | What it does              |
| ---------- | ------------------------- |
| `continue` | Skips current iteration   |
| `break`    | Stops the loop completely |

*/

/*
! 🔥 Real-world use case

! Skip unwanted values without stopping the loop:
* skip odd numbers
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
Output: 2, 4

*/
