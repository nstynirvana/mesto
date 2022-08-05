function enableValidation(selectors) {
    const forms = document.querySelectorAll(selectors.form);
    forms.forEach((form) => {
      form.addEventListener('submit',handleFormSubmit);
      form.addEventListener('input', (event) => handleFormInput(event,selectors));
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if(isValid) {
      form.reset();
    }
}

function handleFormInput(event, selectors) {
    const input = event.target;
    const form = event.currentTarget;
    setCustomError(input);
    showInputError(input);
    setSubmitButtonState(form, selectors);
}

function setCustomError(input) {
    // const validity = input.validity;
    input.setCustomValidity('');
}

function showInputError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, selectors) {
    const button = form.querySelector(selectors.button);
    const isValid = form.checkValidity();
    if(isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(selectors.buttonInvalid);
    } else {
        button.setAttribute('disabled','true');
        button.classList.add(selectors.buttonInvalid);
    }
}
 function resetSpanError() {
     const span = Array.from(document.querySelectorAll('.error'));
     span.forEach((span) => {
         span.textContent = ''
     });
 }

 const selectors = {
     form: '.form',
     button: '.popup__submit-button',
     buttonInvalid: 'popup__submit-button_invalid'
 }

 function handleButtonState(popup) {
    const form = popup.querySelector('.form');
    setSubmitButtonState(form,selectors);
 }

enableValidation(selectors);
