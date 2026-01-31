// Print all number between 1 to 50 that are divisble by 3

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// ⚡ Optimized Version (Cleaner & Faster)
// Instead of checking every number:

for (let i = 3; i <= 50; i += 3) {
  console.log(i);
}
