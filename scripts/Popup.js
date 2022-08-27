import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
 
export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this.popupOpened = ".popup_opened";
        this.popupClosed = '"popup__close-button';
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.closest('.popup').classList.add(this.popupOpened);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.closest('.popup').classList.remove(this.popupOpened);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popupElement.closest('.popup').addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(this.popupOpened)) {
                this.close();
            }
            if (evt.target.classList.contains(this.popupClosed)) {
                this.close();
            }
        });
    }
}


