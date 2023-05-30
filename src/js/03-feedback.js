import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(hendleFormInput, 500));
formEl.addEventListener('submit', hendleFormSubmit);

const valueForm = JSON.parse(localStorage.getItem('feedback-form-state'))??{};
const { userEmail: email = '', userMessage: message = '' } = valueForm;

formEl.email.value = email;
formEl.message.value = message;

function hendleFormInput() {
  valueForm.userEmail = formEl.email.value;
  valueForm.userMessage = formEl.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}

function hendleFormSubmit(e) {
  e.preventDefault();
    const {
      elements: { email, message },
    } = e.currentTarget;
  if(!email.value||!message.value){return console.log('Заповніть всі поля');}

  console.log(valueForm);
  localStorage.clear();
  e.currentTarget.reset();
}
