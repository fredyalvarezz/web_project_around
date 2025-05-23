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
import { resetValidation}  from "./validate.js";


//Seleccionar elementos del DOM
const btnedit = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector("#popup");
const btnclosed = document.querySelector("#popup__button-closed");
const form = document.querySelector("#popup__container");
const inputname = document.querySelector("#popup__input-name");
const inputabout = document.querySelector("#popup__input-about");
const profname = document.querySelector(".profile__info-name");
const profabout = document.querySelector(".profile__info-details");
const butsave = document.querySelector("#popup__container-save");

//Editar Perfil
function openedit() {
  inputname.value = profname.textContent;
  inputabout.value = profabout.textContent;
  popup.classList.add("popup__opened");
}
btnedit.addEventListener("click", openedit);
function closedpopup(){
    inputname.value = profname.textContent;
  inputabout.value = profabout.textContent;
  popup.classList.remove("popup__opened");
}
btnclosed.addEventListener("click", closedpopup);

function savechange(e) {
  e.preventDefault();
  profname.textContent = inputname.value;
  profabout.textContent = inputabout.value;
  openedit();
}
form.addEventListener("submit", savechange);


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
const galleryzone = document.querySelector("#galleryzone");
const galleryTemplate = document.querySelector("#gallery-template");


//crear una card (Singular)
function createCard(card) {
  //clonar el template
  const cloneCard = galleryTemplate.content.cloneNode(true);
  const cloneContent = cloneCard.querySelector(".gallery__card");

  //Seleccionar elementos del DOM
  const btnDelete = cloneContent.querySelector(".gallery__card-button-delete");
  const cardImg = cloneContent.querySelector(".gallery__card-picture");
  const cardName = cloneContent.querySelector(".gallery__card-content-text");
  const btnLike = cloneContent.querySelector(".gallery__card-like-button");
  const btnlikeblack = cloneContent.querySelector(".gallery__card-like-picture")
  const textimg = cloneContent.querySelector(".gallery__card-content-text");
  const contenttext = cloneContent.querySelector(".gallery__card-content");
  const btnclosedimg = cloneContent.querySelector(".gallery__img-closed");




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
    btnclosedimg.classList.add("gallery__img-closed-show");
    //hacer el titulo mas grande y aparecer debajo de la foto
    textimg.classList.add("gallery__card-content-text-big");
    //contenedor del texto
    contenttext.classList.add("gallery__card-content-big");
    //ocultar boton like
    btnLike.classList.add("gallery__card-like-button-hiden");
    //ocultar boton trash
    btnDelete.classList.add("gallery__card-button-delete-hiden");

  });

  //cerrra IMG
  function closedIMG(evt) {
    cardImg.classList.remove("gallery__card-picture-big");
    //contendor de la imagen mas grande con las propiedades del texto
    cloneContent.classList.remove("gallery__popup-img");
    //boton cerrar desaparece
    btnclosedimg.classList.remove("gallery__img-closed-show");
    //hacer el titulo mas grande y aparecer debajo de la foto
    textimg.classList.remove("gallery__card-content-text-big");
    //contenedor del texto
    contenttext.classList.remove("gallery__card-content-big");
    //aparece boton like
    btnLike.classList.remove("gallery__card-like-button-hiden");
    //aparece boton trash
    btnDelete.classList.remove("gallery__card-button-delete-hiden");

  }
  btnclosedimg.addEventListener("click", closedIMG);

  //cerrar img con click en la superposición
document.addEventListener("click", function(evt){
  const imgPopup = evt.target.classList;
  if(imgPopup.contains("gallery__popup-img")){
   closedIMG();

  }
});


  //like
  btnLike.addEventListener("click", () => {
    btnlikeblack.classList.toggle("like");
  });




  //Eliminar Card seleccionada
  btnDelete.addEventListener("click", () => {
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
    galleryzone.appendChild(Cardclone);
  });
}
renderCards();



//Abrir agregar nuevos lugares
const btnadd = document.querySelector(".profile__info-add-button");
const popupadd = document.querySelector("#popup-add");
const btnclosedadd = document.querySelector("#popup__button-closed-add");

function openadd() {
  popupadd.classList.add("popup__opened");
}
btnadd.addEventListener("click", openadd);

function closeadd(){
  popupadd.classList.remove("popup__opened");
 resetValidation();
}
btnclosedadd.addEventListener("click", closeadd);


//agregar nuevas fotos
const addform = document.querySelector("#popup__container-add");
const inputnameadd = document.querySelector("#popup__input-title");
const inputimgadd = document.querySelector("#popup__input-imgurl");

function handleSubmit(event) {
  event.preventDefault();
  const newCard = {
    name: inputnameadd.value,
    link: inputimgadd.value,
  }
  const Cardclone = createCard(newCard);
  galleryzone.prepend(Cardclone);
  openadd();
  addform.reset();
}
addform.addEventListener("submit", handleSubmit);

//***************************************************************************************************************** */
//cerrar popup con esc
function closePopupEsc(evt) {
  if (evt === "Escape" || evt.keyCode === 27) {
    popup.classList.remove("popup__opened");
    popupadd.classList.remove("popup__opened");
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
function closePopupaddClick(evt) {
  if (evt.target === popupadd) {
    popupadd.classList.remove("popup__opened");
    //alert("click fuera del popup");
  }
}
popupadd.addEventListener("click", closePopupaddClick);






