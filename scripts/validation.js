// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('form__error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('form__error_active');
// };
//
// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('form__error');
//     errorElement.classList.remove('form__error_active');
//     errorElement.textContent = '';
// };
//
// const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//         hideInputError(formElement, inputElement);
//     }
// };
//
// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', function () {
//             checkInputValidity(formElement, inputElement);
//         });
//     });
// };
//
// const enableValidation = (formElement) => {
//     const formList = Array.from(formElement.querySelectorAll('.form'));
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit',  (evt) => {
//             evt.preventDefault();
//             setEventListeners(formElement);
//         });
//     });
// };
//
// enableValidation();
const formEdit = {
    form: '.form[id="userEditForm"]',
    button: '.popup__submit-button',
    buttonInvalid: 'popup__submit-button_invalid'
}

const formAdd = {
    form: '.form[id="cardCreateForm"]',
    button: '.popup__submit-button',
    buttonInvalid: 'popup__submit-button_invalid'
}

function enableValidation(selectors) {
    const form = document.querySelector(selectors.form);
    form.addEventListener('submit',handleFormSubmit);
    form.addEventListener('input', (event) => handleFormInput(event,selectors));
}

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if(isValid) {
      alert('Форма валидна');
      form.reset();
    }
    else {
        alert('Форма не валидна');
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
    const validity = input.validity;
    input.setCustomValidity('');

    if (validity.valueMissing) {
        input.setCustomValidity('Пустое поле не допускается');
    }
    if (validity.tooShort) {
        input.setCustomValidity('Введите минимум 2 символа');
    }
    if (validity.tooLong){
        input.setCustomValidity('Превышено максимальное значение символов');
    }
    if (validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity('Введите ссылку');
    }
}

function showInputError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, selectors) {
    const button = form.querySelector(selectors.button)
    const isValid = form.checkValidity();
    if(isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(selectors.buttonInvalid);
      // button.classList.add('popup__submit-button_valid');
    } else {
        button.setAttribute('disabled','true');
        // button.classList.remove('popup__submit-button_valid');
        button.classList.add(selectors.buttonInvalid);
    }
}
enableValidation(formEdit);
enableValidation(formAdd);