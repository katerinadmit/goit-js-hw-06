const inputEl = document.querySelector(`#validation-input`);
console.log(inputEl);

inputEl.addEventListener(`blur`, outBlur);

function outBlur() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return;
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
    return;
  }
}