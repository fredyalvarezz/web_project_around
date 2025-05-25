//validaciones de inputs

// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada


import { enableValidation } from "./validate.js";

enableValidation({
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
import { resetValidation } from "./validate.js";


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

//crear la foto

//seleccionar elementos del DOM
const galleryZone = document.querySelector("#galleryzone");
const galleryTemplate = document.querySelector("#gallery-template");


//crear una card (Singular)
function createCard(card) {
  //clonar el template
  const cloneCard = galleryTemplate.content.cloneNode(true);
  const cloneContent = cloneCard.querySelector(".gallery__card");

  //Seleccionar elementos del DOM
  const buttonDelete = cloneContent.querySelector(".gallery__card-button-delete");
  const cardImg = cloneContent.querySelector(".gallery__card-picture");
  const cardName = cloneContent.querySelector(".gallery__card-content-text");
  const buttonLike = cloneContent.querySelector(".gallery__card-like-button");
  const buttonLikeBlack = cloneContent.querySelector(".gallery__card-like-picture")
  const textImg = cloneContent.querySelector(".gallery__card-content-text");
  const contentText = cloneContent.querySelector(".gallery__card-content");
  const buttonClosedImg = cloneContent.querySelector(".gallery__img-closed");




  //manipulacion del DOM
  cardName.textContent = card.name;
  cardImg.src = card.link;
  cardImg.alt = card.name;

  //Hacer grande la foto

  cardImg.addEventListener("click", () => {
    //al hacer click se hace mas grande la imagen
    cardImg.classList.add("gallery__card-picture-big");
    //contendor de la imagen mas grande con las propiedades del texto
    cloneContent.classList.add("gallery__popup-img");
    //boton cerrar aparece
    buttonClosedImg.classList.add("gallery__img-closed-show");
    //hacer el titulo mas grande y aparecer debajo de la foto
    textImg.classList.add("gallery__card-content-text-big");
    //contenedor del texto
    contentText.classList.add("gallery__card-content-big");
    //ocultar boton like
    buttonLike.classList.add("gallery__card-like-button-hiden");
    //ocultar boton trash
    buttonDelete.classList.add("gallery__card-button-delete-hiden");

  });

  //cerrra IMG
  function closedImg(evt) {
    cardImg.classList.remove("gallery__card-picture-big");
    //contendor de la imagen mas grande con las propiedades del texto
    cloneContent.classList.remove("gallery__popup-img");
    //boton cerrar desaparece
    buttonClosedImg.classList.remove("gallery__img-closed-show");
    //hacer el titulo mas grande y aparecer debajo de la foto
    textImg.classList.remove("gallery__card-content-text-big");
    //contenedor del texto
    contentText.classList.remove("gallery__card-content-big");
    //aparece boton like
    buttonLike.classList.remove("gallery__card-like-button-hiden");
    //aparece boton trash
    buttonDelete.classList.remove("gallery__card-button-delete-hiden");

  }
  buttonClosedImg.addEventListener("click", closedImg);

  //cerrar img con click en la superposición
  document.addEventListener("click", function (evt) {
    const imgPopup = evt.target.classList;
    if (imgPopup.contains("gallery__popup-img")) {
      closedImg();
    }
  });


  //like
  buttonLike.addEventListener("click", () => {
    buttonLikeBlack.classList.toggle("like");
  });




  //Eliminar Card seleccionada
  buttonDelete.addEventListener("click", () => {
    cloneContent.remove();
  });
  return cloneContent;
}


//foreach
//Renders de las cartas para que aparezcan
//Definicion de la funcion
function renderCards() {
  initialCards.forEach((card) => {
    const Cardclone = createCard(card);
    galleryZone.appendChild(Cardclone);
  });
}
renderCards();


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
  resetValidation();
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






