const courses = [
  {
    name: 'Complete React Js Course',
    price: '2.3',
  },
  { name: 'Complete Angular Js Course', price: '2.7' },
  { name: 'Complete Vue Js Course', price: '2.8' },
  { name: 'Complete Node Js Course', price: '2.2' },
];
function generateList() {
  const ul = document.querySelector('.list-group');
  ul.innerHTML = '';
  courses.forEach((course) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement('span');
    span.classList.add('float-right');
    const price = document.createTextNode(`$ ${course.price}`);
    span.appendChild(price);
    li.appendChild(span);

    ul.appendChild(li);
  });
}
window.addEventListener('load', generateList);

const button = document.querySelector('.sort-btn');

button.addEventListener('click', () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});

const buttonTwo = document.querySelector('.sort-btn-hl');

buttonTwo.addEventListener('click', () => {
  courses.sort((a, b) => b.price - a.price);
  generateList();
});
