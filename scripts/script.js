// Попапы
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupVisual = document.querySelector('.popup-visual');
const cardDetailPopupImage = document.querySelector('.popup-visual__image');

const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const buttonOpenAddProfilePopup = document.querySelector('.profile__add-button');

// Формы
const userEditForm = document.querySelector('#userEditForm');
const cardCreateForm = document.querySelector('#cardCreateForm');

const imageText = popupVisual.querySelector('.popup-visual__text');

const userNameInput = document.querySelector('.popup__text_type_name');
const userJobInput = document.querySelector('.popup__text_type_job');
const placeNameInput = document.querySelector('.popup__text_type_title');
const placeImgLinkInput = document.querySelector('.popup__text_type_image');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener('click', openPopupEdit);
buttonOpenAddProfilePopup.addEventListener('click', openPopupAdd);

cardCreateForm.addEventListener('submit', submitHandlerFormAdd);
userEditForm.addEventListener('submit', submitHandlerFormEdit);

const popups = document.querySelectorAll('.popup'); // Список всех попапов
// Добавление слушателей для кнопок "закрыть"
popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
  popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
  });
})

function closePopupEsc(popup) {
  return (evt) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  }
}


// Изначальная отрисовка списка карточек
const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#template-element").content;
initialCards.forEach(renderCard);


// Открытие попапов и инциализация значений
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc(popup));
}

function openPopupEdit() {
  openPopup(popupEdit);
  handleButtonState(popupEdit);
  // popupEdit.addEventListener('keydown', closePopupEsc);
  resetSpanError();
}

function openPopupAdd() {
  openPopup(popupAdd);
  handleButtonState(popupAdd);
  // popupAdd.addEventListener('keydown', closePopupEsc);
  resetSpanError();
}

function openPopupVisual(event) {
  const img = event.target;
  const link = img.getAttribute('src');
  const name = event.target.getAttribute('alt');
  cardDetailPopupImage.setAttribute('src', link);
  cardDetailPopupImage.setAttribute('alt', name);

  imageText.textContent = event.target.getAttribute('alt');

  openPopup(popupVisual);
  // popupVisual.addEventListener('keydown', closePopupEsc);
}


// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc(popup));
}

// Действия с карточкой
function likeCard(event) {
  const myLikeBtn = event.target;
  myLikeBtn.classList.toggle('element__like-button_active');
}

function deleteCard(event) {
  const cartToDelete = event.target.closest('.element');
  cartToDelete.remove();
}


// Применение изменений из форм
function submitHandlerFormAdd(evt) {
  evt.preventDefault();

  const cardData = {
    name: placeNameInput.value,
    link: placeImgLinkInput.value
  };

  
  renderCard(cardData);
  closePopup(popupAdd);

  evt.target.reset();
}

function submitHandlerFormEdit(evt) {
  evt.preventDefault();

  title.textContent = userNameInput.value;
  subtitle.textContent = userJobInput.value;

  closePopup(popupEdit);
}

// Отрисовка карточки из темплейта
function createCard({ name, link }) {
  const cardsElement = cardsTemplate
    .querySelector(".element")
    .cloneNode(true);

  cardsElement.querySelector(".element__title").textContent = name;

  const img = cardsElement.querySelector(".element__image");
  const likeButton = cardsElement.querySelector('.element__like-button');
  const deleteButton = cardsElement.querySelector('.element__delete-button');
  

  img.setAttribute('src', link);
  img.setAttribute('alt', name);
  img.addEventListener('click', openPopupVisual);
 

  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);

  return cardsElement;
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardsContainer.prepend(cardElement);
}

