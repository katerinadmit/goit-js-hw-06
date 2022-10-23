const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')

console.log(inputEl)
console.log(textEl)
inputEl.addEventListener('input', onInputRangeChange)

function onInputRangeChange(event) {
    textEl.style.fontSize = inputEl.value +`px`
    
}