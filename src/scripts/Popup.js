class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupOpenedSelector = "popup_opened";
    this._popupCloseButtonSelector = ".popup__close-button";
    this._handleEscClose = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  open() {
    this._popupElement.classList.add(this._popupOpenedSelector);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement
      .classList.remove(this._popupOpenedSelector);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleCloseButton() {
    const closeBtn = this._popupElement.querySelector(
      this._popupCloseButtonSelector
    );
    closeBtn.addEventListener("click", (evt) => {
      this.close();
    });
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });

    this._handleCloseButton();
  }
}

export default Popup;


