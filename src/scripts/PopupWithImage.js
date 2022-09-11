import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardDetailPopupImage = this._popupElement.querySelector(
      ".popup-visual__image"
    );
    this._imageText = this._popupElement.querySelector(".popup-visual__text");
  }

  _openPopupContentImage(data) {
    this._cardDetailPopupImage.src = data.src;
    this._imageText.textContent = data.name;
    this._cardDetailPopupImage.alt = data.name;
    super.setEventListeners();
  }

  open({ name, src }) {
    this._openPopupContentImage({ name, src });
    super.open();
  }
}

export default PopupWithImage;
