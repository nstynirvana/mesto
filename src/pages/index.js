import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Api from "../components/Api.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import {
  elementsSelector,
  profileSelectors,
  validationSelectors,
  formSelectors,
  cardSelectors,
  variablesOpeningPopups
} from "../constants/constants.js";
import './index.css';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: 'bc55db49-2649-4ef7-be93-0875309bb963',
    'content-type': 'application/json'
  }
});

// Попапы

const buttonOpenEditProfilePopup = document.querySelector(variablesOpeningPopups.buttonOpenEditPopup);
const buttonOpenAddProfilePopup = document.querySelector(variablesOpeningPopups.buttonOpenAddPopup);
const buttonOpenEditAvatarPopup = document.querySelector(variablesOpeningPopups.buttonOpenEditFacePopup);


// Формы
const userEditForm = document.querySelector(formSelectors.userEdit);
const cardCreateForm = document.querySelector(formSelectors.cardCreate);
const editUserCardForm = document.querySelector(formSelectors.editAvatar);

const userNameInput = document.querySelector(".popup__text_type_name");
const userJobInput = document.querySelector(".popup__text_type_job");



const popupAdd = new PopupWithForm(".popup_add", handleCardFormSubmit);
popupAdd.setEventListeners();
const popupEdit = new PopupWithForm(".popup_edit", handleUserFormSubmit);
popupEdit.setEventListeners();
const cardImagePopup = new PopupWithImage(".popup_open-image");
cardImagePopup.setEventListeners();
const popupEditAvatar = new PopupWithForm(".popup_edit-avatar", handleAvatarFormSubmit);
popupEditAvatar.setEventListeners();
const popupWithSubmit = new PopupWithSubmit(".popup_delete", handleDeleteOnClick);
popupWithSubmit.setEventListeners();

const cardsTemplate = document.querySelector("#template-element").content;

let section;
let userId;
let userData;

const userInfo = new UserInfo({
  nameSelector: profileSelectors.nameSelector,
  aboutSelector: profileSelectors.aboutSelector,
  avatarSelector: profileSelectors.avatarSelector
});

Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([info,cards]) => {
     section = new Section(
      { items: cards, renderer: renderCard },
      elementsSelector
    );  
    userId = info._id;
    userData = { ...info };
    userInfo.setUserInfo(info);
    section.renderItems();
  })
  .catch((err) => {
    console.log(err);
  })
  

const userFormValidator = new FormValidator(
  validationSelectors,
  userEditForm
);
const cardFormValidator = new FormValidator(
  validationSelectors,
  cardCreateForm
);

const avatarFormValidator = new FormValidator(
  validationSelectors,
  editUserCardForm
);

userFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

function openPopupEdit() {
  setInputEditFormValue();
  userFormValidator.resetErrors();
  userFormValidator.updateButtonSubmit();
  popupEdit.open();
}

function openPopupAdd() {
  cardFormValidator.resetErrors();
  cardFormValidator.updateButtonSubmit();
  popupAdd.open();
}

function openPopupVisual({ name, link }) {
  cardImagePopup.open({ name, src: link });
}

function openPopupEditAvatar() {
  avatarFormValidator.resetErrors();
  avatarFormValidator.updateButtonSubmit();
  popupEditAvatar.open();
}

function openPopupSubmit(cardId) {
  popupWithSubmit.open(cardId);
}

// Применение изменений из форм
function handleCardFormSubmit(cardData) {
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

function handleUserFormSubmit() {
  const userPromise = api.editUserInfo({
    name: userNameInput.value,
    about: userJobInput.value,
  })
  return userPromise
    .then(({ name, about, avatar }) => {
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

function handleDeleteOnClick(card) {
  const submitPromise = api.deleteCard(card.id);
  return submitPromise
    .then(() => {
      card.delete();
      popupWithSubmit.close();
    })
    .catch(err => {
      console.log(err);
    })
}

function handleAvatarFormSubmit(formData) {
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

function likeCounterUpdate(card) {
  if (card.isLiked()) {
     api.deleteCardLike(card.id)
      .then((cardData) => {
        card.setLikes(cardData.likes)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
     api.setCardLike(card.id)
      .then((cardData) => {
        card.setLikes(cardData.likes)
      })
      .catch(err => {
        console.log(err);
      });
  }
}

function createCard(data) {
  const card = new Card(data, userData, handleCardClick, cardsTemplate, cardSelectors, api, openPopupSubmit, likeCounterUpdate);
  return card.generate();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
}

// Добавление необходимых слушателей при загрузке страницы
buttonOpenEditProfilePopup.addEventListener("click", openPopupEdit);
buttonOpenAddProfilePopup.addEventListener("click", openPopupAdd);
buttonOpenEditAvatarPopup.addEventListener("click", openPopupEditAvatar);