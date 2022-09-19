import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import Api from "../scripts/Api.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithSubmit from "../scripts/PopupWithSubmit.js";
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

// const buttonOpenDeleteCardPopup = document.querySelector(
//   ".element__delete-button_open"
// );

// Формы
const userEditForm = document.querySelector(formSelectors.userEdit);
const cardCreateForm = document.querySelector(formSelectors.cardCreate);

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
// const popupWithSubmit = new PopupWithSubmit(".popup_delete");
// popupWithSubmit.setEventListeners();
// const popupEditAvatar = new PopupWithSubmit(".");
// popupEditAvatar.setEventListeners();

let userInfo;
const userPromise = api.getUserInfo();

userPromise
.then((info) => {
  userInfo = new UserInfo({
    nameSelector: profileSelectors.nameSelector,
    aboutSelector: profileSelectors.aboutSelector,
    avatarSelector: profileSelectors.avatarSelector
  });
  userInfo.setUserInfo(info);
})
.catch(err => {
  console.log(err);
})



// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener("click", openPopupEdit);
buttonOpenAddProfilePopup.addEventListener("click", openPopupAdd);
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

// function openPopupDelete() {
//   popupDelete.open();
// }

// Применение изменений из форм
function submitHandlerFormAdd(cardData) {
  renderCard(cardData);
  cardsPromise
  .then(({name, link}) => {
    
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
  userPromise
  .then(({name, about}) => {
    userInfo.setUserInfo({
      name,
      about,
    });
  })
  .catch(err => {
    console.log(err);
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

