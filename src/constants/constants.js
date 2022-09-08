export const elementsSelector = ".elements";

export const profileSelectors = {
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle"
};

export const validationSelectors = {
  button: ".popup__submit-button",
  buttonInvalid: "popup__submit-button_invalid",
  lineInvalid: "popup__text_invalid",
  error: ".error",
  input: "input",
};

export const cardSelectors = {
  likeButton: ".element__like-button",
  deleteButton: ".element__delete-button",
  elementTitle: ".element__title",
  elementImage : ".element__image",
  element: ".element" ,
  likeButtonActive: ".element__like-button_active"
}

export const formSelectors = {
  userEdit: "#userEditForm",
  cardCreate: "#cardCreateForm",
};

export const initialCardsData = [
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
