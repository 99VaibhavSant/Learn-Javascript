//Write a BMI calculator


function calculateBMI(weightKg, heightMeters) {
  return weightKg / (heightMeters * heightMeters);
}

// example
const bmi = calculateBMI(70, 1.75);
console.log(bmi.toFixed(2)); // 


