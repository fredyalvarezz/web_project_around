import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';


const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__input-error_active"
};

//form add
// const addForm = document.querySelector(".popup__container");

const addForm = document.querySelector("#popup__container-add");
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

//form edit
const profileForm = document.querySelector("#popup__container");
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();


//Form edit profile
const popup = document.querySelector("#popup");
const inputName = document.querySelector("#popup__input-name");
const inputAbout = document.querySelector("#popup__input-about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-details");


export function handleOpenEdit() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup__opened");
}
export function handleClosedPopup() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.remove("popup__opened");
  profileFormValidator.resetValidation();
}
export function saveChange(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleClosedPopup();
}

//Form add nuevos lugares
const popupAdd = document.querySelector("#popup-add");
const inputNameAdd = document.querySelector("#popup__input-title");
const inputImgAdd = document.querySelector("#popup__input-imgurl");
const galleryZone = document.querySelector("#galleryzone");

export function openAdd() {
  popupAdd.classList.add("popup__opened");
}
export function closedAdd() {
  popupAdd.classList.remove("popup__opened");
  addForm.reset();
  addFormValidator.resetValidation();
}

export function handleSubmit(event) {
  event.preventDefault();

  const newCard = {
    name: inputNameAdd.value,
    link: inputImgAdd.value,
  };

  //Crear nueva instancia de la Card con los datos y el selector del template
  const card = new Card(newCard, '#gallery-template');
  const createCard = card.getCardElement();

  //insertar en el DOM
  galleryZone.prepend(createCard);

  //cerrar popup y resetear formulario
  closedAdd();
  addForm.reset();
}

//cerrra popup
export function closePopupEsc(evt) {
  if (evt === "Escape" || evt.keyCode === 27) {
    popup.classList.remove("popup__opened");
    popupAdd.classList.remove("popup__opened");
    addForm.reset();
    profileFormValidator.resetValidation();
    addFormValidator.resetValidation();
    //alert("Esc presionado");
  }
};

export function closePopupClick(evt) {
  if (evt.target === popup ) {
    popup.classList.remove("popup__opened");
    popupAdd.classList.remove("popup__opened");
    profileFormValidator.resetValidation();
    //alert("click fuera del popup");
  }
}

//close popup add
export function closePopupAddClick(evt) {
  if (evt.target === popupAdd) {
    popupAdd.classList.remove("popup__opened");
    addForm.reset();
    addFormValidator.resetValidation();
    //alert("click fuera del popup");
  }
}