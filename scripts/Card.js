class Card {
    constructor(data, template) {
      this._data = data;
      this._template = template;
    }
  
    // Публичный метод
    generate() {
      const card = this._createCard();
      this._addEventListeners(card);
      return card;
    }
  
    _createCard() {
      const element = this._getElement();
      element.querySelector(".element__title").textContent = this._data.name;
  
      const img = element.querySelector(".element__image");
  
      img.setAttribute("src", this._data.link);
      img.setAttribute("alt", this._data.name);
  
      return element;
    }
  
    // Приватные методы
    _addEventListeners(element) {
      const likeButton = element.querySelector(".element__like-button");
      const deleteButton = element.querySelector(".element__delete-button");
  
      likeButton.addEventListener("click", this._likeCard);
      deleteButton.addEventListener("click", this._deleteCard);
    }
  
    _getElement() {
    return this._template.querySelector(".element").cloneNode(true);
    }
  
    _likeCard(event) {
      const myLikeBtn = event.target;
      myLikeBtn.classList.toggle("element__like-button_active");
    }
  
    _deleteCard(event) {
      const cartToDelete = event.target.closest(".element");
      cartToDelete.remove();
    }
  }
  
  export default Card;
  