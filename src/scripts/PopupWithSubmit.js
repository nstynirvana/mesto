import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._submitButton = this._popupElement.querySelector(
        ".popup__submit-button");
        console.log(this._submitButton);
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._submitHandler();
            this.close();
          });
    }

    close() {
        super.close();
    }
}

export default PopupWithSubmit;