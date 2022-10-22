const refs = {
    inputNameEL: document.querySelector('#name-input'),
    outputNameEL: document.querySelector('#name-output'),
    
};

refs.inputNameEL.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.outputNameEL.textContent = event.currentTarget.value;
    
}

