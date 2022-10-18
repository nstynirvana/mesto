class Card {
  constructor(data, user, handleCardClick, template, cardSelectors, api, openRemovePopupSubmit) {
    this._data = data;
    this._api = api;
    this._user = user;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._cardSelectors = cardSelectors;
    this._openRemovePopupSubmit = openRemovePopupSubmit;
  }

  // Публичный метод
  generate() {
    this._createCard();
    this._addEventListeners();
    return this._cardElement;
  }

  // Приватные методы

  _createCard() {
    this._cardElement = this._getElement();

    const { name, link } = this._data;

    this._cardElement.querySelector(this._cardSelectors.elementTitle).textContent = name;

    this._cardImage = this._cardElement.querySelector(this._cardSelectors.elementImage);

    this._cardImage.setAttribute("src", link);
    this._cardImage.setAttribute("alt", name);

    this._createButtons();
  }

  _createButtons() {
    const owner = this._data.owner || this._user;
    this._likeCounter = this._cardElement.querySelector(this._cardSelectors.likeCounter);
    this._likeCounter.textContent = this._data.likes ? this._data.likes.length : 0;

    this._deleteButton = this._cardElement.querySelector(".element__delete-button");
    if (this._user._id === owner._id) {

      this._deleteButton.classList.remove('hidden');
    }
  }

  _addEventListeners() {
    this._likeButton = this._cardElement.querySelector(".element__like-button");

    this._likeButton.addEventListener("click", this._likeCard.bind(this));
    this._deleteButton.addEventListener("click", () => {
      this._openRemovePopupSubmit();
    });
    

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._data);
    });
  }

  _getElement() {
    return this._template.querySelector(".element").cloneNode(true);
  }

  _likeCard() {
    const isLiked = this._data.likes
      .map((user) => user._id)
      .includes(this._user._id);

    const method = isLiked ? "setCardLike" : "deleteCardLike";

    this._api[method](this._data._id)
      .then((card) => {
        this._likeCounter.textContent = card.likes.length;
        this._likeButton.classList.toggle(this._cardSelectors.likeButtonActive);
      })
      .catch((err) => console.log(err));
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }


}

export default Card;
