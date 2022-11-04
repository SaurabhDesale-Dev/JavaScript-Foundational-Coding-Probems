//Write a JavaScript program to print the contents of the current window.

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  window.print();
});
