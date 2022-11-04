//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');

const multiply_nums = document.getElementById('multiply_nums');
const divide_nums = document.getElementById('divide_nums');

multiply_nums.addEventListener('click', (e) => {
  const value = document.createElement('p');
  const multiplyValue = numOne.value * numTwo.value;
  value.innerHTML = `The Result is ${multiplyValue}`;
  document.body.appendChild(value);
  console.log(multiplyValue);
  e.preventDefault();
});

divide_nums.addEventListener('click', (e) => {
  const value = document.createElement('p');
  const divideValue = numOne.value / numTwo.value;
  value.innerHTML = `The Result is ${divideValue}`;
  document.body.appendChild(value);
  console.log(divideValue);
  e.preventDefault();
});
