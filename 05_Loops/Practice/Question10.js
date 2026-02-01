// Stop at first Multiple of 7

/* Write a loop from 1 to 100 that:
 * Print each number
 * Stops completely when it finds the first number divisible by 7:
 */

let i = 1;
while (i <= 100) {
  console.log(i);
  if (i % 7 == 0) {
    break;
  }
  i++;
}
