import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import Api from "../scripts/Api.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import {
  elementsSelector,
  profileSelectors,
  validationSelectors,
  formSelectors,
  cardSelectors
} from "../constants/constants.js";
import './index.css';

// Попапы

const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__edit-button"
);
const buttonOpenAddProfilePopup = document.querySelector(
  ".profile__add-button"
);

const buttonOpenEditAvatarPopup = document.querySelector(
  ".profile__image-edit-button"
);

// Формы
const userEditForm = document.querySelector(formSelectors.userEdit);
const cardCreateForm = document.querySelector(formSelectors.cardCreate);
const editUserCardForm = document.querySelector(formSelectors.editAvatar);

const userNameInput = document.querySelector(".popup__text_type_name");
const userJobInput = document.querySelector(".popup__text_type_job");
const placeNameInput = document.querySelector(".popup__text_type_title");
const placeImgLinkInput = document.querySelector(".popup__text_type_image");

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
      authorization: '85e5819e-fbee-490f-b0c8-532aec964f98',
      'content-type': 'application/json'
  }
});

const popupAdd = new PopupWithForm(".popup_add", submitHandlerFormAdd);
popupAdd.setEventListeners();
const popupEdit = new PopupWithForm(".popup_edit", submitHandlerFormEdit);
popupEdit.setEventListeners();
const popupVisual = new PopupWithImage(".popup_open-image");
const popupEditAvatar = new PopupWithForm(".popup_edit-avatar", submitHandlerAvatarEdit);
popupEditAvatar.setEventListeners();

let userInfo;
let userData;
const userPromise = api.getUserInfo();

userPromise
.then((info) => {
  userInfo = new UserInfo({
    nameSelector: profileSelectors.nameSelector,
    aboutSelector: profileSelectors.aboutSelector,
    avatarSelector: profileSelectors.avatarSelector
  });
  userInfo.setUserInfo(info);
  userData = {...info};
})
.catch(err => {
  console.log(err);
})

// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener("click", openPopupEdit);
buttonOpenAddProfilePopup.addEventListener("click", openPopupAdd);
buttonOpenEditAvatarPopup.addEventListener("click", openPopupEditAvatar)
// buttonOpenDeleteCardPopup.addEventListener("click", openPopupDelete);

// Изначальная отрисовка списка карточек
const cardsTemplate = document.querySelector("#template-element").content;

let section;
const cardsPromise = api.getAllCards();

cardsPromise
.then((cards) => {
  section = new Section(
    { items: cards, renderer: renderCard },
    elementsSelector
  );
  section.renderItems();
})
 .catch( err => {
  console.log(err);
 })

const editUserFormValidator = new FormValidator(
  validationSelectors,
  userEditForm
);
const createCardFormValidator = new FormValidator(
  validationSelectors,
  cardCreateForm
);

const editUserAvatarValidator = new FormValidator(
  validationSelectors,
  editUserCardForm
);

editUserFormValidator.enableValidation();
createCardFormValidator.enableValidation();
editUserAvatarValidator.enableValidation();

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

function openPopupEditAvatar() {
  popupEditAvatar.open();
}

// Применение изменений из форм
function submitHandlerFormAdd(cardData) {
  const createCardPromise = api.addNewCard(cardData);
  return createCardPromise
  .then((card) => {
    renderCard(card);
  })
  .catch(err => {
    console.log(err);
   });
}

function setInputEditFormValue() {
  const { name, about } = userInfo.getUserInfo();
  userNameInput.value = name;
  userJobInput.value = about;
}

function submitHandlerFormEdit() {
  const userPromise = api.editUserInfo({
    name: userNameInput.value,
    about: userJobInput.value,
  })
  return userPromise
  .then(({name, about, avatar}) => {
    userInfo.setUserInfo({
      name,
      about,
      avatar
    });
  })
  .catch(err => {
    console.log(err);
   });
}

function submitHandlerAvatarEdit(formData) {
  console.log(formData)
return api.editUserAvatar(formData)
.then((user) => {
  userInfo.setUserInfo(user)
})
.catch(err => {
  console.log(err);
 });
}

function handleCardClick(cardData) {
  openPopupVisual(cardData);
}

function createCard(data) {
  const card = new Card(data, userData, handleCardClick, cardsTemplate, cardSelectors, api);
  return card.generate();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
}

