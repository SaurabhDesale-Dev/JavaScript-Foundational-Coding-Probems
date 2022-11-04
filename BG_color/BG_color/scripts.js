const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

const center = document.querySelector('.center');

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = (element, color) => {
  return element.addEventListener('mouseenter', () => {
    center.style.background = color;
  });
};
console.log(magicColorChanger(red, getBGColor(red)));
console.log(magicColorChanger(cyan, getBGColor(cyan)));
console.log(magicColorChanger(violet, getBGColor(violet)));
console.log(magicColorChanger(orange, getBGColor(orange)));
console.log(magicColorChanger(pink, getBGColor(pink)));
