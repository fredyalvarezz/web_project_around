// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada
//llamar con la clase y la subclase

import { Card } from "./Card.js";
import {
  closedAdd,
  closePopupAddClick,
  closePopupClick,
  closePopupEsc,
  handleClosedPopup,
  handleOpenEdit,
  handleSubmit,
  openAdd,
  saveChange
} from "./utils.js";

import { FormValidator } from "./FormValidator.js";
const config = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

  const addForm = document.querySelector("#popup__container-add");
  const addFormValidator = new FormValidator(config, addForm);
  addFormValidator.enableValidation();





//*******************************************************************************************************************
//Cards array
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

const galleryZone = document.querySelector("#galleryzone");

initialCards.forEach(cardData => {
  const card = new Card(cardData, "#gallery-template");
  const cardElement = card.getCardElement();
  galleryZone.appendChild(cardElement);
});

//******************************************************************************************************



//Seleccionar elementos del DOM
const buttonEdit = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector("#popup");
const buttonClosed = document.querySelector("#popup__button-closed");
const form = document.querySelector("#popup__container");

//Eventos llamados desde utils.js

// form edit profile
buttonEdit.addEventListener("click", handleOpenEdit);

buttonClosed.addEventListener("click", handleClosedPopup);
//prevent default de edit profile
form.addEventListener("submit", saveChange);



//************************************************************************************************************//

//Abrir agregar nuevos lugares
const buttonAdd = document.querySelector(".profile__info-add-button");
const popupAdd = document.querySelector("#popup-add");
const buttonClosedAdd = document.querySelector("#popup__button-closed-add");

//Form add nuevos lugares
buttonAdd.addEventListener("click", openAdd);

buttonClosedAdd.addEventListener("click", closedAdd);


//agregar nuevas fotos


addForm.addEventListener("submit", handleSubmit);

//***************************************************************************************************************** */
//cerrar popup con esc
document.addEventListener("keydown", closePopupEsc);

//cerrar popup info con click fuera del form
popup.addEventListener("click", closePopupClick);

//cerrra popup add img
popupAdd.addEventListener("click", closePopupAddClick);



