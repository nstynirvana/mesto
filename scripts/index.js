import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import {
  elementsSelector,
  profileSelectors,
  initialCardsData,
  validationSelectors,
  formSelectors
} from "./constants.js";

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

const popupAdd = new PopupWithForm(".popup_add");
const popupEdit = new PopupWithForm(".popup_edit");
const popupVisual = new PopupWithImage(".popup-visual");

const userInfo = new UserInfo({
  nameSelector: profileSelectors.nameSelector,
  aboutSelector: profileSelectors.aboutSelector,
});

// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener("click", openPopupEdit);
buttonOpenAddProfilePopup.addEventListener("click", openPopupAdd);

cardCreateForm.addEventListener("submit", submitHandlerFormAdd);
userEditForm.addEventListener("submit", submitHandlerFormEdit);

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
  cardDetailPopupImage.setAttribute("src", link);
  cardDetailPopupImage.setAttribute("alt", name);

  popupVisual.open({ name, src: link });
}
// Применение изменений из форм
function submitHandlerFormAdd(evt) {
  evt.preventDefault();

  const cardData = {
    name: placeNameInput.value,
    link: placeImgLinkInput.value,
  };

  renderCard(cardData);
  popupAdd.close();

  evt.target.reset();
}

function setInputEditFormValue() {
  const { name, about } = userInfo.getUserInfo();
  userNameInput.value = name;
  userJobInput.value = about;
}

function submitHandlerFormEdit(evt) {
  evt.preventDefault();

  userInfo.setUserInfo({
    name: userNameInput.value,
    about: userJobInput.value,
  });

  popupEdit.close();
}

function handleCardClick(cardData) {
  console.log(cardData);
  openPopupVisual(cardData);
}

function createCard(data) {
  const card = new Card(data, handleCardClick, cardsTemplate);
  return card.generate();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
}
