import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._submitButton = this._popupElement.querySelector(
            ".popup__submit-button");
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._cardId);
            this.close();
        });
    }

    open(cardId) {
        this._cardId = cardId;
        super.open();
    }

    close() {
        super.close();
    }
}

export default PopupWithSubmit;