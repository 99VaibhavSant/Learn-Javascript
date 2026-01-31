// Find the sum of numbers form 1 to 100 using loop

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//! 🔥 Bonus (Smart Interview Trick 😎)
//* Without a loop:

let n = 100;
let sum1 = (n * (n + 1)) / 2;
console.log(sum1); // 5050
