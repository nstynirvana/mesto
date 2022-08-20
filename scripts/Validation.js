class FormValidator {
    constructor(selectors, form) {
      this._selectors = selectors;
      this._form = form;
    }
  
    enableValidation() {
      this._form.addEventListener("submit", this._handleFormSubmit);
      this._form.addEventListener("input", (event) =>
        this._handleFormInput(event, this._selectors)
      );
      this._setSubmitButtonState();
      this._resetSpanError();
    }
  
    _handleFormSubmit(event) {
      event.preventDefault();
      const form = event.currentTarget;
      const isValid = form.checkValidity();
      if (isValid) {
        form.reset();
      }
    }
  
    _handleFormInput(event) {
      const input = event.target;
      this._setCustomError(input);
      this._showInputError(input);
      this._setSubmitButtonState(this._form, this._selectors);
    }
  
    _setCustomError(input) {
      input.setCustomValidity("");
      input.classList.add(this._selectors.lineInvalid);
    }
  
    _showInputError(input) {
      const span = input.nextElementSibling;
      span.textContent = input.validationMessage;
    }
  
    _setSubmitButtonState() {
      const button = this._form.querySelector(this._selectors.button);
      const isValid = this._form.checkValidity();
      if (isValid) {
        button.removeAttribute("disabled");
        button.classList.remove(this._selectors.buttonInvalid);
      } else {
        button.setAttribute("disabled", "true");
        button.classList.add(this._selectors.buttonInvalid);
      }
    }
    _resetSpanError() {
      const span = Array.from(document.querySelectorAll(".error"));
      span.forEach((span) => {
        span.textContent = "";
      });
    }
  }
  
  export default FormValidator;