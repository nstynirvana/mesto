class Card {
  constructor(data, handleCardClick, template, cardSelectors) {
    this._data = data;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._cardSelectors = cardSelectors;
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
  }

  _addEventListeners() {
    this._likeButton = this._cardElement.querySelector(".element__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".element__delete-button"
    );

    this._likeButton.addEventListener("click", this._likeCard.bind(this));
    this._deleteButton.addEventListener("click", this._deleteCard.bind(this));

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._data);
    });
  }

  _getElement() {
    return this._template.querySelector(".element").cloneNode(true);
  }

  _likeCard() {
    this._likeButton.classList.toggle(this._cardSelectors.likeButtonActive); 
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}

export default Card;
