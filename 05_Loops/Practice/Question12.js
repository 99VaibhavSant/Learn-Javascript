/*
! Print First 5 number only

! Write a loop 1 to 100 that:
  * Print only 5 odd numbers
  * Then stop the loop
  * Use both if , continue and a counter + brack
*/

let count = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
    count++;
  }
  if (count == 5) {
    break;
  }
}
