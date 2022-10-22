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



// const refs = {
//     decrementBtn: document.querySelector('[data-action="decrement"]'),
//     valueLabel: document.querySelector("#value"),
//     incrementBtn: document.querySelector('[data-action="increment"]'),
//   };
//   let counterVal = Number.parseInt(refs.valueLabel.textContent) || 0;
//   function updateValue(newVal) {
//     refs.valueLabel.textContent = newVal;
//   }
//   refs.decrementBtn.addEventListener("click", () => {
//     counterVal -= 1;
//     updateValue(counterVal);
//   });
//   refs.incrementBtn.addEventListener("click", () => {
//     counterVal += 1;
//     updateValue(counterVal);
//   });

  