import { Card } from './Card.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { FormValidator } from './FormValidator.js';
import { UserInfo } from './UserInfo.js';

// Validacion de formularios
const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__input-error_active"
};

// Formulario agregar Cards y Formulario Editar
const formAdd = document.querySelector("#popup__container-add");
const formEdit = document.querySelector("#popup__container");

//Instancia a FormValidation para validar el formulario
export const addFormValidator = new FormValidator(validationConfig, formAdd);
export const editFormValidator = new FormValidator(validationConfig, formEdit);
addFormValidator.enableValidation(); //activa la validacion
editFormValidator.enableValidation();

// Instancias para creacion de las tarjetas
export function createCard(cardData) {
  const card = new Card(cardData, "#gallery-template", (name, link) => {
    imagePopup.open(name, link); //click para hacer grande la imagen
  });
  return card.getCardElement(); //Devuelve el elemento DOM de la tarjeta lista para insertarse en la página.
}


// Instancia Popup de Imagen grande
const imagePopup = new PopupWithImage('#popup-image');
imagePopup.setEventListeners();

// Array de las tarjetas
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

//Instancia a CardSection
export const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardSection.addItem(cardElement);
  }
}, "#galleryzone");

cardSection.renderItems();

// Popup agregar cards
const addCardPopup = new PopupWithForm('#popup-add', (formData) => {
  const newCard = createCard(formData);
  cardSection.addItem(newCard);
});
addCardPopup.setEventListeners();

//UserInfo
const inputName = document.querySelector("#popup__input-name");
const inputAbout = document.querySelector("#popup__input-about");


// Instancia de UserInfo
//y toma los valores de name y job del html y los pone en los selector
const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-details",
});


// Instancia del formulario para editar perfil
const editProfilePopup = new PopupWithForm('#popup', (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    job: formData.about
  });

});
editProfilePopup.setEventListeners();



// Boton de editar perfil:abrir popup y cargar los datos actuales en los inputs
const addButton = document.querySelector(".profile__info-add-button");
const editButton = document.querySelector(".profile__info-edit-button");

editButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = job;
  editFormValidator.resetValidation(); // Limpia errores previos del formulario
  editProfilePopup.open();
});

// Boton agregar nuevas cards: abre popup para agregar cards
addButton.addEventListener("click", () => {
  formAdd.reset();
  addFormValidator.resetValidation();
  addCardPopup.open();
});