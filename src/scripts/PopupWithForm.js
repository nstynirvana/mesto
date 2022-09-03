import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._inputList = Array.from(
      this._popupElement.querySelectorAll(".popup__input")
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
    // cardCreateForm.addEventListener("submit", submitHandlerFormAdd);
    // userEditForm.addEventListener("submit", submitHandlerFormEdit);
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
      
    });
  }

  close() {
    this._popupElement.reset();
  }
}

export default PopupWithForm;


