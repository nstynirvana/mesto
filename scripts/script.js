const popup = document.querySelector('.popup');
const editPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = popup.querySelector('.popup__close-button');
const submitPopupButton = document.querySelector('.popup__submit-button');
const formElement = popup.querySelector('.form');
const nameInput = formElement.querySelector('.popup__text_name');
const jobInput = formElement.querySelector('.popup__text_job');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
editPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);