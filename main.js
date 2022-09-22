(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectors=e,this._form=n,this._button=this._form.querySelector(this._selectors.button)}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",this._handleFormSubmit.bind(this)),this._form.addEventListener("input",(function(t){return e._handleFormInput(t)}))}},{key:"_handleFormSubmit",value:function(e){e.preventDefault(),this._isValid&&this._form.reset(),this._checkValidity()}},{key:"_handleFormInput",value:function(e){this._input=e.target,this._checkValidity()}},{key:"_checkValidity",value:function(){this._isValid=this._form.checkValidity(),this._setCustomError(),this._showInputError(),this._setSubmitButtonState()}},{key:"_setCustomError",value:function(){this._isValid&&this._input.classList.remove(this._selectors.lineInvalid)}},{key:"_showInputError",value:function(){this._input.nextElementSibling.textContent=this._input.validationMessage}},{key:"_setSubmitButtonState",value:function(){this._isValid?(this._button.removeAttribute("disabled"),this._button.classList.remove(this._selectors.buttonInvalid)):(this._button.setAttribute("disabled","true"),this._button.classList.add(this._selectors.buttonInvalid))}},{key:"resetErrors",value:function(){var e=this;Array.from(this._form.querySelectorAll(this._selectors.error)).forEach((function(e){e.textContent=""})),Array.from(this._form.querySelectorAll(this._selectors.input)).forEach((function(t){t.classList.remove(e._selectors.lineInvalid)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._popupOpenedSelector="popup_opened",this._popupCloseButtonSelector=".popup__close-button",this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add(this._popupOpenedSelector),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove(this._popupOpenedSelector),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleCloseButton",value:function(){var e=this;this._popupElement.querySelector(this._popupCloseButtonSelector).addEventListener("click",(function(t){e.close()}))}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._handleCloseButton()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}const f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(f,e);var t,n,r,o,c=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=c.call(this,e))._submitHandler=t,n._submitButton=n._popupElement.querySelector(".popup__submit-button"),n}return t=f,(n=[{key:"setEventListeners",value:function(){var e=this;u(l(f.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e._submitHandler(),e.close()}))}},{key:"close",value:function(){u(l(f.prototype),"close",this).call(this)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._api=u,this._user=n,this._template=o,this._handleCardClick=r,this._cardSelectors=i}var t,n;return t=e,(n=[{key:"generate",value:function(){return this._createCard(),this._addEventListeners(),this._cardElement}},{key:"_createCard",value:function(){this._cardElement=this._getElement();var e=this._data,t=e.name,n=e.link;this._cardElement.querySelector(this._cardSelectors.elementTitle).textContent=t,this._cardImage=this._cardElement.querySelector(this._cardSelectors.elementImage),this._cardImage.setAttribute("src",n),this._cardImage.setAttribute("alt",t),this._createButtons()}},{key:"_createButtons",value:function(){var e=this._data.owner||this._user;this._likeCounter=this._cardElement.querySelector(this._cardSelectors.likeCounter),this._likeCounter.textContent=this._data.likes?this._data.likes.length:0,this._deleteButton=this._cardElement.querySelector(".element__delete-button"),this._user._id===e._id&&this._deleteButton.classList.remove("hidden")}},{key:"_addEventListeners",value:function(){var e=this;this._likeButton=this._cardElement.querySelector(".element__like-button"),this._likeButton.addEventListener("click",this._likeCard.bind(this)),this._deleteButton.addEventListener("click",this._openSubmitPopup.bind(this)),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data)}))}},{key:"_getElement",value:function(){return this._template.querySelector(".element").cloneNode(!0)}},{key:"_likeCard",value:function(){var e=this,t=this._data.likes.map((function(e){return e._id})).includes(this._user._id)?"setCardLike":"deleteCardLike";this._api[t](this._data._id).then((function(t){e._likeCounter.textContent=t.likes.length,e._likeButton.classList.toggle(e._cardSelectors.likeButtonActive)})).catch((function(e){return console.log(e)}))}},{key:"_openSubmitPopup",value:function(){var e=new f(".popup_delete",this._deleteCard.bind(this));e.setEventListeners(),e.open()}},{key:"_deleteCard",value:function(e){e.remove(),e=null}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const d=h;function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"setCardLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}const j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._cardDetailPopupImage=t._popupElement.querySelector(".popup-visual__image"),t._imageText=t._popupElement.querySelector(".popup-visual__text"),t}return t=u,(n=[{key:"_openPopupContentImage",value:function(e){this._cardDetailPopupImage.src=e.src,this._imageText.textContent=e.name,this._cardDetailPopupImage.alt=e.name,g(S(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e){var t=e.name,n=e.src;this._openPopupContentImage({name:t,src:n}),g(S(u.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}const x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._inputList=Array.from(n._popupElement.querySelectorAll(".popup__text")),n._submitButton=n._popupElement.querySelector(".popup__submit-button"),n._formSubmitHandler=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form=this._popupElement.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._submitButton.textContent;e._submitButton.textContent="Сохранение...",e._formSubmitHandler(e._getInputValues()).then((function(){e.close(),e._submitButton.textContent=n}))})),L(B(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),L(B(u.prototype),"close",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const A=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._about.textContent=n,this._avatar.src=r}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var D={button:".popup__submit-button",buttonInvalid:"popup__submit-button_invalid",lineInvalid:"popup__text_invalid",error:".error",input:"input"},V={likeButton:".element__like-button",deleteButton:".element__delete-button",elementTitle:".element__title",elementImage:".element__image",element:".element",likeButtonActive:"element__like-button_active",likeCounter:".element__sum-likes"};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__image-edit-button"),G=document.querySelector("#userEditForm"),z=document.querySelector("#cardCreateForm"),M=document.querySelector("#editAvatarForm"),K=document.querySelector(".popup__text_type_name"),Q=document.querySelector(".popup__text_type_job"),W=(document.querySelector(".popup__text_type_title"),document.querySelector(".popup__text_type_image"),new y({url:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"85e5819e-fbee-490f-b0c8-532aec964f98","content-type":"application/json"}})),X=new x(".popup_add",(function(e){return W.addNewCard(e).then((function(e){ae(e)})).catch((function(e){console.log(e)}))}));X.setEventListeners();var Y=new x(".popup_edit",(function(){return W.editUserInfo({name:K.value,about:Q.value}).then((function(e){var t=e.name,n=e.about,r=e.avatar;Z.setUserInfo({name:t,about:n,avatar:r})})).catch((function(e){console.log(e)}))}));Y.setEventListeners();var Z,$,ee=new j(".popup_open-image"),te=new x(".popup_edit-avatar",(function(e){return console.log(e),W.editUserAvatar(e).then((function(e){Z.setUserInfo(e)})).catch((function(e){console.log(e)}))}));te.setEventListeners(),W.getUserInfo().then((function(e){(Z=new A({nameSelector:".profile__title",aboutSelector:".profile__subtitle",avatarSelector:".profile__image"})).setUserInfo(e),$=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)})).catch((function(e){console.log(e)})),H.addEventListener("click",(function(){var e,t,n;t=(e=Z.getUserInfo()).name,n=e.about,K.value=t,Q.value=n,oe.resetErrors(),Y.open()})),N.addEventListener("click",(function(){ie.resetErrors(),X.open()})),J.addEventListener("click",(function(){te.open()}));var ne,re=document.querySelector("#template-element").content;W.getAllCards().then((function(e){(ne=new m({items:e,renderer:ae},".elements")).renderItems()})).catch((function(e){console.log(e)}));var oe=new t(D,G),ie=new t(D,z),ue=new t(D,M);function ce(e){var t,n,r;n=(t=e).name,r=t.link,ee.open({name:n,src:r})}function ae(e){var t=new d(e,$,ce,re,V,W).generate();ne.addItem(t)}oe.enableValidation(),ie.enableValidation(),ue.enableValidation()})();