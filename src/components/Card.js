class Card {
  constructor(data, user, handleCardClick, template, cardSelectors, api, openRemovePopupSubmit, likeCounterUpdate) {
    this._data = data;
    this._api = api;
    this._user = user;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._cardSelectors = cardSelectors;
    this._openRemovePopupSubmit = openRemovePopupSubmit;
    this._likeCounterUpdate = likeCounterUpdate;
    this.id = data._id;
  }

  // Публичные методы

  generate() {
    this._createCard();
    this._addEventListeners();
    // this._toggleLike();
    return this._cardElement;
  }

  setLikes(likes) {
    this._data.likes = likes;
    this._toggleLike();
  }

  isLiked() {
    // return this._data.likes.map((user) => user._id).includes(this._user._id);
    return this._data.likes.some(user => user._id === this._user._id)
  };

 delete() {
    this._cardElement.remove();
    this._cardElement = null;
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
    this._deleteButton = this._cardElement.querySelector(".element__delete-button");
    if (this._user._id !== owner._id) {
      this._deleteButton.classList.add(".element__delete-button");
    }
    else {
      this._deleteButton.classList.remove('hidden');
    }
  }

  _toggleLike() {
    if (!this.isLiked()) {
      this._likeButton.classList.remove(this._cardSelectors.likeButtonActive); 
    } else {
      this._likeButton.classList.add(this._cardSelectors.likeButtonActive); 
    }
    this._likeCounter = this._cardElement.querySelector(this._cardSelectors.likeCounter);
    this._likeCounter.textContent = this._data.likes.length;
    
  }

  _addEventListeners() {
    this._likeButton = this._cardElement.querySelector(".element__like-button");
    this._likeButton.addEventListener("click", () => {
      this._likeCounterUpdate(this)
    });

    this._deleteButton.addEventListener("click", () => {
      this._openRemovePopupSubmit(this);
    });


    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._data);
    });
  }

  _getElement() {
    return this._template.querySelector(".element").cloneNode(true);
  }

 
}

export default Card;