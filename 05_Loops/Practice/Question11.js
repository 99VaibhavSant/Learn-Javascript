/*
!Skip Multiples of 3

!Write a loop form 1 to 20 that
    * Skip number divisible by 3
    *Print all other

    use continue
*/

for (i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}
