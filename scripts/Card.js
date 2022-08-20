class Card {
    constructor({data, handleCardClick}, template ) {
      this._data = data;
      this._template = template;
      this._handleCardClick = handleCardClick;
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
      this._likeButton = element.querySelector('.element__like-button'); 
      this._deleteButton = element.querySelector(".element__delete-button");
      this._cardImage = element.querySelector("img");
      
      this._likeButton.addEventListener("click", this._likeCard);
      this._deleteButton.addEventListener("click", this._deleteCard);
      this._cardImage.addEventListener('click', () => this._handleCardClick());
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
  