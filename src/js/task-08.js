const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === `` || password.value.trim() === ``) {
    alert`Please fill in all the fields!`;
    return;
  }
  const dataForm = {
    email: email.value,
    password: password.value,
  };

  console.log(dataForm);
  event.currentTarget.reset();
}

