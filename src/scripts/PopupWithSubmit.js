import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._formSubmitHandler = formSubmitHandler;
      this._submitButton = this._popupElement.querySelector(
        ".popup__submit-button");
    }

    submitHandler(submitAction) {
        this._formSubmitHandler = submitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._formSubmitHandler();
          });
      
    }

    close() {
        super.close();
    }
}