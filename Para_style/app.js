//Write a JavaScript program to set the background color of a paragraph.
const btn = document.querySelector('#btn');

const paraOne = document.querySelector('#paraOne');
const paraTwo = document.querySelector('#paraTwo');

btn.addEventListener('click', () => {
  paraOne.style.backgroundColor = 'red';
  paraTwo.style.backgroundColor = 'yellow';
});
