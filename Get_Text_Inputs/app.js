// Write a JavaScript function to get the values of First and Last name of the following form.

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const submitBtn = document.getElementById('btn');

const getFormvalue = (e) => {
  const fnValue = firstName.value;
  const lnValue = lastName.value;
  console.log(fnValue, lnValue);
};
