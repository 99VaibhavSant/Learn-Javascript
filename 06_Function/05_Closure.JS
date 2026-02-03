/*
! 👉 What is a Closure in JavaScript?
A closure is when a function “remembers” variables from the place where it was created, even after that place is gone.

! In short 👇
Function + its surrounding variables = Closure
*/
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2

/*
! What's happening here?

    1. outer() runs
         - Creates count = 0
         - Creates inner()

    2. outer() returns inner

    3. outer() is done (normally its variables should disappear)

    4. BUT ❗ inner() still remembers count

    That memory = closure
*/
