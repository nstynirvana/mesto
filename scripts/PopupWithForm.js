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

  _getInputValues() {}
}

export default PopupWithForm;
