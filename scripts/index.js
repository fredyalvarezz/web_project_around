//validaciones de inputs

// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada
//llamar con la clase y la subclase


import { FormValidator } from "./FormValidator.js";

const config = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const validator = new FormValidator(config);
validator.enableValidation();


//*******************************************************************************************************************
//Cards
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

import { Card } from "./Card.js";
//import {ImagePopup} from "./utils.js";
const galleryZone = document.querySelector("#galleryzone");
//const imagePopup = new ImagePopup();

initialCards.forEach(cardData => {
  const card = new Card(cardData, "#gallery-template", /*imagePopup*/);
  const cardElement = card.getCardElement();
  galleryZone.appendChild(cardElement);
});

//******************************************************************************************************

//Eventos





//Seleccionar elementos del DOM
const buttonEdit = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector("#popup");
const buttonClosed = document.querySelector("#popup__button-closed");
const form = document.querySelector("#popup__container");
const inputName = document.querySelector("#popup__input-name");
const inputAbout = document.querySelector("#popup__input-about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-details");
const buttonSave = document.querySelector("#popup__container-save");

//Editar Perfil
function openEdit() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup__opened");
}
buttonEdit.addEventListener("click", openEdit);

function closedPopup() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.remove("popup__opened");
}
buttonClosed.addEventListener("click", closedPopup);

function saveChange(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closedPopup();
}
form.addEventListener("submit", saveChange);


//-----------------------------------------------------------------------------------------------------------------
//array de fotos


//************************************************************************************************************//

//Abrir agregar nuevos lugares
const buttonAdd = document.querySelector(".profile__info-add-button");
const popupAdd = document.querySelector("#popup-add");
const buttonClosedAdd = document.querySelector("#popup__button-closed-add");

function openAdd() {
  popupAdd.classList.add("popup__opened");
}
buttonAdd.addEventListener("click", openAdd);

function closedAdd() {
  popupAdd.classList.remove("popup__opened");
  FormValidator.resetValidation();
}
buttonClosedAdd.addEventListener("click", closedAdd);


//agregar nuevas fotos
const addForm = document.querySelector("#popup__container-add");
const inputNameAdd = document.querySelector("#popup__input-title");
const inputImgAdd = document.querySelector("#popup__input-imgurl");

function handleSubmit(event) {
  event.preventDefault();
  const newCard = {
    name: inputNameAdd.value,
    link: inputImgAdd.value,
  }
  const Cardclone = createCard(newCard);
  galleryZone.prepend(Cardclone);
  closedAdd();
  addForm.reset();
}
addForm.addEventListener("submit", handleSubmit);

//***************************************************************************************************************** */
//cerrar popup con esc
function closePopupEsc(evt) {
  if (evt === "Escape" || evt.keyCode === 27) {
    popup.classList.remove("popup__opened");
    popupAdd.classList.remove("popup__opened");
    //alert("Esc presionado");
  }

};
document.addEventListener("keydown", closePopupEsc);



//cerrar popup info con click fuera del form
function closePopupClick(evt) {
  if (evt.target === popup) {
    popup.classList.remove("popup__opened");
    //alert("click fuera del popup");
  }

}
popup.addEventListener("click", closePopupClick);

//cerrra popup add img
function closePopupAddClick(evt) {
  if (evt.target === popupAdd) {
    popupAdd.classList.remove("popup__opened");
    //alert("click fuera del popup");
  }
}
popupAdd.addEventListener("click", closePopupAddClick);






