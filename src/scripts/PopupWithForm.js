import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._inputList = Array.from(
      this._popupElement.querySelectorAll(".popup__text")
    );
    this._submitButton = this._popupElement.querySelector(
      ".popup__submit-button"
    );
    this._formSubmitHandler = formSubmitHandler;
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  setEventListeners() {
    this._form = this._popupElement.querySelector('.form');
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
    super._handleCloseButton();
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export default PopupWithForm;


