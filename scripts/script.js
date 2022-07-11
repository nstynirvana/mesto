const popup = document.querySelector('.popup');
const editPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = popup.querySelector('.popup__close-button');
const submitPopupButton = document.querySelector('.popup__submit-button');
const formElement = popup.querySelector('.form');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const titleElement = document.querySelector('.element__title');
const linkImage = document.querySelector('.element__image');
const nameInputElement = formElement.querySelector('.popup__text_type_title');
const linkInputElement = document.querySelector('.popup__text_type_image');

const addPopupButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');
const deleteCardButton = document.querySelector('.element__delete-button');
const openImageBig = document.querySelector('.popup_visual');

// button like
const likeElementCard = document.querySelectorAll('.element__like-button');

function likeCard() {
  likeElementCard.classList.toggle('element__like-button_active');
}

function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;

  closePopup(popupEdit);
}

// function formSubmitHandler(evt) {
//   evt.preventDefault();
  
//   titleElement.textContent = nameInputElement.value;
//   linkImage.textContent = linkInputElement.value;

//   closePopup(popupAdd);
// }

formElement.addEventListener('submit', formSubmitHandler);
editPopupButton.addEventListener('click', openPopupEdit);
closePopupButton.addEventListener('click', closePopup);
addPopupButton.addEventListener('click', openPopupAdd);
likeElementCard.addEventListener('click', likeCard);

