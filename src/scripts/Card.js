class Card {
  constructor(data, handleCardClick, template) {
    this._data = data;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  // Публичный метод
  generate() {
    this._createCard();
    this._addEventListeners();
    return this._cardElement;
  }
  
// Приватные методы

  _createCard(cardSelectors) {
    const element = this._getElement();
    const {deleteButton, likeButton} = this._cardElement(cardSelectors, element);
    const { name, link } = this._data;

    element.querySelector(".element__title").textContent = name;

    this._cardImage = element.querySelector(".element__image");

    this._cardImage.setAttribute("src", link);
    this._cardImage.setAttribute("alt", name);

    // this._cardElement = element;
  }

  _addEventListeners() {
    // const likeButton = this._cardElement.querySelector(".element__like-button");
    // const deleteButton = this._cardElement.querySelector(
    //   ".element__delete-button"
    // );

    likeButton.addEventListener("click", this._likeCard);
    deleteButton.addEventListener("click", this._deleteCard);

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._data);
    });
  }

  _getElement() {
    return this._template.querySelector(".element").cloneNode(true);
  }

  _likeCard(event) {
    const likeBtn = event.target;
    likeBtn.classList.toggle("element__like-button_active");
  }

  _deleteCard(event) {
    const cartToDelete = event.target.closest(".element"); 
    cartToDelete.remove();
  }
}

export default Card;
