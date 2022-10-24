let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});


console.log(counterValue)
console.log(incrementBtn)
console.log(decrementBtn)




  