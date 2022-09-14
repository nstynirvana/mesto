import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import {
  elementsSelector,
  profileSelectors,
  initialCardsData,
  validationSelectors,
  formSelectors,
  cardSelectors
} from "../constants/constants.js";
import './index.css';

// Попапы
const cardDetailPopupImage = document.querySelector(".popup-visual__image");

const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__edit-button"
);
const buttonOpenAddProfilePopup = document.querySelector(
  ".profile__add-button"
);

// Формы
const userEditForm = document.querySelector(formSelectors.userEdit);
const cardCreateForm = document.querySelector(formSelectors.cardCreate);

const userNameInput = document.querySelector(".popup__text_type_name");
const userJobInput = document.querySelector(".popup__text_type_job");
const placeNameInput = document.querySelector(".popup__text_type_title");
const placeImgLinkInput = document.querySelector(".popup__text_type_image");

const popupAdd = new PopupWithForm(".popup_add", submitHandlerFormAdd);
popupAdd.setEventListeners();
const popupEdit = new PopupWithForm(".popup_edit", submitHandlerFormEdit);
popupEdit.setEventListeners();
const popupVisual = new PopupWithImage(".popup_open-image");

const userInfo = new UserInfo({
  nameSelector: profileSelectors.nameSelector,
  aboutSelector: profileSelectors.aboutSelector,
});

// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener("click", openPopupEdit);
buttonOpenAddProfilePopup.addEventListener("click", openPopupAdd);

// Изначальная отрисовка списка карточек
const cardsTemplate = document.querySelector("#template-element").content;

const section = new Section(
  { items: initialCardsData, renderer: renderCard },
  elementsSelector
);
section.renderItems();

const editUserFormValidator = new FormValidator(
  validationSelectors,
  userEditForm
);
const createCardFormValidator = new FormValidator(
  validationSelectors,
  cardCreateForm
);
editUserFormValidator.enableValidation();
createCardFormValidator.enableValidation();

function openPopupEdit() {
  setInputEditFormValue();
  editUserFormValidator.resetErrors();
  popupEdit.open();
}

function openPopupAdd() {
  createCardFormValidator.resetErrors();
  popupAdd.open();
}

function openPopupVisual({ name, link }) {
  popupVisual.open({ name, src: link });
}

// Применение изменений из форм
function submitHandlerFormAdd(cardData) {
  renderCard(cardData);
}

function setInputEditFormValue() {
  const { name, about } = userInfo.getUserInfo();
  userNameInput.value = name;
  userJobInput.value = about;
}

function submitHandlerFormEdit() {
  userInfo.setUserInfo({
    name: userNameInput.value,
    about: userJobInput.value,
  });
}

function handleCardClick(cardData) {
  openPopupVisual(cardData);
}

function createCard(data) {
  const card = new Card(data, handleCardClick, cardsTemplate, cardSelectors);
  return card.generate();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
}
