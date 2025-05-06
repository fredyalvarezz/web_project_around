//Editar Perfil
let btnedit = document.querySelector(".profile__info-edit-button");
let popup = document.querySelector("#popup");
let btnclosed = document.querySelector("#popup__button-closed");
let form = document.querySelector("#popup__container");
let inputname = document.querySelector("#popup__input-name");
let inputabout = document.querySelector("#popup__input-about");
let profname = document.querySelector(".profile__info-name");
let profabout = document.querySelector(".profile__info-details");
let butsave = document.querySelector("#popup__container-save");

function openedit() {
  inputname.value = profname.textContent;
  inputabout.value = profabout.textContent;
  popup.classList.toggle("popup__opened");
}
btnedit.addEventListener("click", openedit);
btnclosed.addEventListener("click", openedit);

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
  const btnDelete = cloneContent.querySelector(".galley__card-button-delete");
  const cardImg = cloneContent.querySelector(".gallery__card-picture");
  const cardName = cloneContent.querySelector(".gallery__card-content-text");
  const btnLike = cloneContent.querySelector(".gallery__card-like-button");
  const btnlikeblack = cloneContent.querySelector(".gallery__card-like-picture")
  const textimg = cloneContent.querySelector(".gallery__card-content-text");
  const contenttext = cloneContent.querySelector(".gallery__card-content");



  //manipulacion del DOM
  cardName.textContent = card.name;
  cardImg.src = card.link;
  cardImg.alt = card.name;

  //Hacer grande la foto
  cardImg.addEventListener("click", () =>{
    cardImg.classList.toggle("gallery__card-picture-big");
    //hacer el titulo mas grande y aparecer debajo de la foto
    textimg.classList.toggle("gallery__card-content-text-big");
    //ocultar contenido con fondo negro
    contenttext.classList.toggle("gallery__card-content-hiden");
    //ocultar boton like
    btnLike.classList.toggle("gallery__card-like-button-hiden");
    //ocultar boton trash
    btnDelete.classList.toggle("galley__card-button-delete-hiden");

  });

  //like
  btnLike.addEventListener("click", () =>{
    btnlikeblack.classList.toggle("like");
  });




  //Eliminar Card seleccionada
  btnDelete.addEventListener("click", () => {
    cloneContent.remove();
  });
  return cloneContent;
}


//foreach
//Definicion de la funcion
function renderCards() {
  initialCards.forEach((card) => {
    const Cardclone = createCard(card);
    galleryzone.appendChild(Cardclone);
  });
}
renderCards();


//Abrir agregar nuevos lugares
let btnadd = document.querySelector(".profile__info-add-button");
let popupadd = document.querySelector("#popup-add");
let btnclosedadd = document.querySelector("#popup__button-closed-add");

function openadd() {
  popupadd.classList.toggle("popup__opened");
}
btnadd.addEventListener("click", openadd);
btnclosedadd.addEventListener("click", openadd);


//agregar nuevas fotos
const addform = document.querySelector("#popup__container-add");
const inputnameadd = document.querySelector("#popup__input-title");
const inputimgadd = document.querySelector("#popup__input-imgurl");

function handleSubmit(event){
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