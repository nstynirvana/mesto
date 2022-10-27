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

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: 'bc55db49-2649-4ef7-be93-0875309bb963',
    'content-type': 'application/json'
  }
});

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
    userData = { ...info };
  })
  .catch(err => {
    console.log(err);
  })

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
  .catch(err => {
    console.log(err);
  })

const UserFormValidator = new FormValidator(
  validationSelectors,
  userEditForm
);
const CardFormValidator = new FormValidator(
  validationSelectors,
  cardCreateForm
);

const AvatarFormValidator = new FormValidator(
  validationSelectors,
  editUserCardForm
);

UserFormValidator.enableValidation();
CardFormValidator.enableValidation();
AvatarFormValidator.enableValidation();

function openPopupEdit() {
  setInputEditFormValue();
  UserFormValidator.resetErrors();
  UserFormValidator.resetFormErrors();
  popupEdit.open();
}

function openPopupAdd() {
  CardFormValidator.resetErrors();
  CardFormValidator.resetFormErrors();
  popupAdd.open();
}

function openPopupVisual({ name, link }) {
  cardImagePopup.open({ name, src: link });
}

function openPopupEditAvatar() {
  AvatarFormValidator.resetFormErrors();
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


//  function handleDeleteOnClick(card) {
//     api.deleteCard(card.cardId)
//     .then(() => {
//       card.element.remove();
//       popupWithSubmit.close();
//     })
//     .catch(err => console.log(err));
//   }


function handleDeleteOnClick(cardId) {
  const submitPromise = api.deleteCard(cardId);
  return submitPromise
  .then(() => {
    deleteCardFn();
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
   if(card.isLiked()) {
    api.deleteCardlike(card.cardId)
    .then(dataCard => card.setLikes(dataCard.likes))
    .catch(err => console.log(err))
  } else {
    api.setCardlike(card.cardId)
    .then(dataCard => card.setLikes(dataCard.likes))
    .catch(err => console.log(err))
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