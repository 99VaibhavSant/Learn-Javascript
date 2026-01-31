// Count how many numbers between 1 to 100 are divisible by both 3 and 5

for (i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
