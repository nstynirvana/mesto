import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.form');
    this._inputList = Array.from(
      this._popupElement.querySelectorAll(".popup__input")
    );
    this._submitButton = this._popupElement.querySelector(
      ".popup__submit-button"
    );
    this._formSubmitHandler = formSubmitHandler;
    console.log(this._popupElement);
   
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  setEventListeners() {
    console.log(this._form)
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
  }

  close() {
    this._form.reset();
    this._popupElement.classList.remove(this._popupOpenedSelector);
    document.removeEventListener("keydown", this._handleEscClose);
  }
}

export default PopupWithForm;


