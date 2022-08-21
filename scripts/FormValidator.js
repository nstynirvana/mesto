class FormValidator {
  constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
    // this._inputList,
    //  this._cardImage,
    //  this._likeButton
    this._button = this._form.querySelector(this._selectors.button);
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
    if (this._isValid) {
      form.reset();
    }
  }

  _handleFormInput(event) {
    this._input = event.target;
    this._setCustomError();
    this._showInputError();
    this._isValid = this._form.checkValidity();
    this._setSubmitButtonState(this._form, this._selectors);
  }

  _setCustomError() {
    if (this._isValid) {
      this._input.classList.remove(this._selectors.lineInvalid);
    } else {
      this._input.setCustomValidity("");
      this._input.classList.add(this._selectors.lineInvalid);
    }
   
  }

  _showInputError() {
    const span = this._input.nextElementSibling;
    span.textContent = this._input.validationMessage;
  }

  _setSubmitButtonState() {
    if (this._isValid) {
      this._button.removeAttribute("disabled");
      this._button.classList.remove(this._selectors.buttonInvalid);
    } else {
      this._button.setAttribute("disabled", "true");
      this._button.classList.add(this._selectors.buttonInvalid);
    }
  }

  _resetSpanError() {
    const span = Array.from(this._form.querySelectorAll(this._selectors.error));
    span.forEach((span) => {
      span.textContent = "";
    });
  }
}

export default FormValidator;
