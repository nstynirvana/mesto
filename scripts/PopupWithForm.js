import { Popup } from './Popup.js';

export class PopupWithForm {
    constructor(popupSelector, formSubmitHandler) {
        super(popupSelector);
        this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
        this._submitButton = this._popupElement.querySelector('.popup__submit-button');
        this._formSubmitHandler = formSubmitHandler;
    }

    _getInputValues() {

    }

    close() {

    }
}
