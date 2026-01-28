/*
! What is Control Flow?

* Control flow decides which code runs , when it runs and how much times it runs and how many times it runs.
* It,s like decision-making + direction in your JavaScript Program.
* If operators are the verbs , control flow is the traffic signal.

*/


/*
! ✅ if...else Definition (JavaScript)

if...else is a control flow statement that allows a program to make decisions and execute different code blocks based on a condition.

! 🧠 Simple Definition (Notes-friendly)

if...else checks a condition and runs code based on true or false

! 🔍 How it works

If the condition is true → if block runs
If the condition is false → else block runs

*/

/* 
if (condition) {
  runs if condition is true
} else {
  runs if condition is false
}
*/


let age = 18;

if(age >= 18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}



/*
! else if — simple definition (JavaScript)
 
* else if is used in conditional statements to check another condition when the previous if (or else if) condition is false.

👉 It lets you handle multiple conditions in order.

if (condition1) {
  runs if condition1 is true
} else if (condition2) {
  runs if condition1 is false AND condition2 is true
} else {
  runs if none of the above are true
}

*/

let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

/*
! Key Points

* Checked top to bottom
* Only one block runs
* else is optional
* You can have multiple else if

*/

// ! 🔄 Flowchart-Style Explanation
/* 
Start
  ↓
Check condition1?
  ├─ Yes → Run block 1 → End
  └─ No
       ↓
   Check condition2?
       ├─ Yes → Run block 2 → End
       └─ No
            ↓
        Run else block → End
*/





//! Question: Check if a number is even or odd.

let num = 8;

if(num % 2 === 0){
    console.log(`${num} Even number`);
}
else{
    console.log(`${num} Odd number`);
}


// ! Question: Validate username and password.
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else if (username === "admin") {
  console.log("Wrong password");
} else {
  console.log("Invalid user");
}


// ! Question: Check positive, negative, or zero.

let n = -5;

if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
