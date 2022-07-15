const popups = document.querySelectorAll('.popup')

const submitPopupButton = document.querySelector('.popup__submit-button');

const formElements = document.querySelectorAll('.form'); // Список всех форм на странице
const userEditForm = document.querySelector('#userEditForm');
const cardCreateForm = document.querySelector('#cardCreateForm');

const deleteCardButton = document.querySelector('.element__delete-button');
const openImageBig = document.querySelector('.popup_visual');

// button like
const likeButtons = document.querySelectorAll('.element__like-button');

likeButtons.forEach(btn => {
  btn.addEventListener('click', likeCard);
})

function likeCard(event) {
  const myLikeBtn = event.target;
  myLikeBtn.classList.toggle('element__like-button_active');
}

// openPopupEdit

function openPopup() {
  popups.classList.add("popup_opened");
}

const editPopupButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');

const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  console.log(popupEdit)
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}

editPopupButton.addEventListener('click', openPopupEdit);

// openPopupAdd
const addPopupButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');

const cardTitle = document.querySelector('.element__title');
const cardLink = document.querySelector('.element__image');
// const nameInputElement = formElement.querySelector('.popup__text_type_title');
// const linkInputElement = document.querySelector('.popup__text_type_image');

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
  cardTitle.value = "Название";
  cardLink.value = "Ссылка на картинку";
}

addPopupButton.addEventListener('click', openPopupAdd);

// closePopup

function closePopup() {
  popups.classList.remove('popup_opened');
}

const closePopupButton = popups.querySelector('.popup__close-button');

popups.forEach(popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
}

// obrabotchik first popup
function formSubmitHandler(evt) {
  evt.preventDefault();

  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;

  closePopup(popupEdit);
}

formElements.addEventListener('submit', formSubmitHandler);

// create New Card

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

const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#template-element").content;

const cardsInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  cardsInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const cardsElement = cardsTemplate
    .querySelector(".element")
    .cloneNode(true);
  cardsElement.querySelector(".element__title").textContent = name;
  cardsElement.querySelector(".element__image").src = link;

  cardsContainer.prepend(placeElement);
}
render();