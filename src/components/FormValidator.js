class FormValidator {
  constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
    this._button = this._form.querySelector(this._selectors.button);
  }

  enableValidation() {
    this._form.addEventListener("submit", this._handleFormSubmit.bind(this));
    this._form.addEventListener("input", (event) =>
      this._handleFormInput(event)
    );
    // resetErrors();
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    if (this._isValid) {
      this._form.reset();
    }
    this._checkValidity();
  }

  _handleFormInput(event) {
    this._input = event.target;
    this._checkValidity();
  }

  _checkValidity() {
    this._isValid = this._form.checkValidity();
    this._setCustomError();
    this._showInputError();
    this._setSubmitButtonState();
  }

  _setCustomError() {
    if (this._isValid) {
      this._input.classList.remove(this._selectors.lineInvalid);
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

  resetErrors() {
    const spans = Array.from(this._form.querySelectorAll(this._selectors.error));

    spans.forEach((span) => {
      span.textContent = "";
    });

    const inputs = Array.from(
      this._form.querySelectorAll(this._selectors.input)
    );

    inputs.forEach((input) => {
      input.classList.remove(this._selectors.lineInvalid);
    });
  }
}

export default FormValidator;
