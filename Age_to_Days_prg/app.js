//Create a function that takes the age in years and returns the age in days.
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

const ageToDays = (age) => {
  return age * 365;
};
console.log(ageToDays(1));
