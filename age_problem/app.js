// Use logical operator to find whether age falls within range 10 to 20
const ageRange = (age) => {
  if (age >= 10 && age <= 20) {
    console.log(`The age of person lies 10 and 20`);
  } else {
    console.log(`The age of person does not lie 10 and 20`);
  }
};

ageRange(30);
