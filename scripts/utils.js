import { createCard, cardSection } from '../pages/index.js'; // al inicio de utils.js
import { editFormValidator, addFormValidator } from '../pages/index.js';

//Form edit profile
const popup = document.querySelector("#popup");
const inputName = document.querySelector("#popup__input-name");
const inputAbout = document.querySelector("#popup__input-about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-details");


export function handleOpenEdit() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  editFormValidator.resetValidation();
  popup.classList.add("popup__opened");
}
export function handleClosedPopup() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.remove("popup__opened");
  editFormValidator.resetValidation();
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
  addFormValidator.reset();
  addFormValidator.resetValidation();
}

export function handleSubmit(event) {
  event.preventDefault();

  const newCard = {
    name: inputNameAdd.value,
    link: inputImgAdd.value,
  };

  const cardElement = createCard(newCard);
  cardSection.addItem(cardElement); // usa Section correctamente

  //cerrar popup y resetear formulario
  closedAdd();
  addFormValidator.reset();
}

//cerrra popup
export function closePopupEsc(evt) {
  if (evt === "Escape" || evt.keyCode === 27) {
    popup.classList.remove("popup__opened");
    popupAdd.classList.remove("popup__opened");
    addFormValidator.reset();
    editFormValidator.resetValidation();
    addFormValidator.resetValidation();
    //alert("Esc presionado");
  }
};

export function closePopupClick(evt) {
  if (evt.target === popup) {
    popup.classList.remove("popup__opened");
    popupAdd.classList.remove("popup__opened");
    editFormValidator.resetValidation();
    //alert("click fuera del popup");
  }
}

//close popup add
export function closePopupAddClick(evt) {
  if (evt.target === popupAdd) {
    popupAdd.classList.remove("popup__opened");
    addFormValidator.reset();
    addFormValidator.resetValidation();
    //alert("click fuera del popup");
  }
}