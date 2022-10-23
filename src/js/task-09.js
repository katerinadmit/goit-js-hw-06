function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl= document.querySelector('.body-color');
const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

console.log(bodyEl)
console.log(btn)

btn.addEventListener('click',onBtnClick)

function onBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = bodyEl.style.backgroundColor
}

