import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

// Попапы
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupVisual = document.querySelector(".popup-visual");
const cardDetailPopupImage = document.querySelector(".popup-visual__image");

const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__edit-button"
);
const buttonOpenAddProfilePopup = document.querySelector(
  ".profile__add-button"
);

// Формы
const userEditForm = document.querySelector("#userEditForm");
const cardCreateForm = document.querySelector("#cardCreateForm");

const imageText = popupVisual.querySelector(".popup-visual__text");

const userNameInput = document.querySelector(".popup__text_type_name");
const userJobInput = document.querySelector(".popup__text_type_job");
const placeNameInput = document.querySelector(".popup__text_type_title");
const placeImgLinkInput = document.querySelector(".popup__text_type_image");

const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

const initialCardsData = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener("click", openPopupEdit);
buttonOpenAddProfilePopup.addEventListener("click", openPopupAdd);

cardCreateForm.addEventListener("submit", submitHandlerFormAdd);
userEditForm.addEventListener("submit", submitHandlerFormEdit);

const popups = document.querySelectorAll(".popup"); // Список всех попапов

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// Изначальная отрисовка списка карточек
const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#template-element").content;
const cardElements = initialCardsData.map((card) => createCard(card));
renderCards(cardElements);

// Открытие попапов и инциализация значений
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

const selectors = {
  form: ".form",
  button: ".popup__submit-button",
  buttonInvalid: "popup__submit-button_invalid",
  lineInvalid: "popup__text_invalid",
  error: ".error",
};

const editUserFormValidator = new FormValidator(selectors, userEditForm);
const createCardFormValidator = new FormValidator(selectors, cardCreateForm);
editUserFormValidator.enableValidation();
createCardFormValidator.enableValidation();
// console.log(editUserUserFormValidator)

function openPopupEdit() {
  setInputEditFormValue();
  openPopup(popupEdit);
}

function openPopupAdd() {
  openPopup(popupAdd);
}

function openPopupVisual({ name, link }) {
  cardDetailPopupImage.setAttribute("src", link);
  cardDetailPopupImage.setAttribute("alt", name);

  imageText.textContent = name;

  openPopup(popupVisual);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

// Применение изменений из форм
function submitHandlerFormAdd(evt) {
  evt.preventDefault();

  const cardData = {
    name: placeNameInput.value,
    link: placeImgLinkInput.value,
  };

  const cardElement = createCard(cardData);
  renderCards([cardElement]);
  closePopup(popupAdd);

  evt.target.reset();
}

function setInputEditFormValue() {
  userNameInput.value = title.textContent;
  userJobInput.value = subtitle.textContent;
}

function submitHandlerFormEdit(evt) {
  evt.preventDefault();

  title.textContent = userNameInput.value;
  subtitle.textContent = userJobInput.value;

  closePopup(popupEdit);
}

function handleCardClick(cardData) {
  openPopupVisual(cardData);
}

function createCard(data) {
  const card = new Card(data, handleCardClick, cardsTemplate);
  return card.generate();
}

function renderCards(cards) {
  console.log(cards);
  cardsContainer.prepend(...cards);
}

// Добавление слушателей для кнопок "закрыть"
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});
