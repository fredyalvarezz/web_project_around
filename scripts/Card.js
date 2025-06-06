import {CardEvents} from "./utils.js";

export class Card {
  constructor({ name, link }, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  // Método público que devuelve la tarjeta lista para insertar en el DOM
  getCardElement() {
    this._element = this._getTemplate();

    this._cardImg = this._element.querySelector(".gallery__card-picture");
    this._cardName = this._element.querySelector(".gallery__card-content-text");
    this._buttonLike = this._element.querySelector(".gallery__card-like-button");
    this._buttonDelete = this._element.querySelector(".gallery__card-button-delete");
    this._buttonClose = this._element.querySelector(".gallery__img-closed");
    this._cardTextContainer = this._element.querySelector(".gallery__card-content");

     // Inicializamos los eventos externos
    this._cardEvents = new CardEvents(this);

    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  // Método privado para obtener la plantilla
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".gallery__card")
      .cloneNode(true);

    return cardTemplate;
  }
  // _handleImageClick() {

  //   this._cardImg.classList.add("gallery__card-picture-big");
  //   this._element.classList.add("gallery__popup-img");
  //   this._buttonClose.classList.add("gallery__img-closed-show");
  //   this._cardName.classList.add("gallery__card-content-text-big");
  //   this._cardTextContainer.classList.add("gallery__card-content-big");
  //   this._buttonLike.classList.add("gallery__card-like-button-hiden");
  //   this._buttonDelete.classList.add("gallery__card-button-delete-hiden");
  // }

  // Cierra la imagen grande
  // _handleImageClose() {
  //   this._cardImg.classList.remove("gallery__card-picture-big");
  //   this._element.classList.remove("gallery__popup-img");
  //   this._buttonClose.classList.remove("gallery__img-closed-show");
  //   this._cardName.classList.remove("gallery__card-content-text-big");
  //   this._cardTextContainer.classList.remove("gallery__card-content-big");
  //   this._buttonLike.classList.remove("gallery__card-like-button-hiden");
  //   this._buttonDelete.classList.remove("gallery__card-button-delete-hiden");
  // }

  // Cierre si se hace click fuera (superposición)
  //_handleOverlayClick(evt) {
    //if (evt.target.classList.contains("gallery__popup-img")) {
      //this._handleImageClose();
    //}
 // }

  // Toggle del like
  _handleLike() {
    const likeIcon = this._buttonLike.querySelector(".gallery__card-like-picture");
    likeIcon.classList.toggle("like");
  }

  // Eliminar la tarjeta
  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  // Método privado para asignar eventos
  _setEventListeners() {
    this._cardImg.addEventListener("click", () => this._cardEvents.handleOpenImage());
    this._buttonClose.addEventListener("click", () => this._cardEvents.handleCloseImage());
    document.addEventListener("click", (e) => this._cardEvents.handleOverlayClick(e));
    this._buttonLike.addEventListener("click", () => this._handleLike());
    this._buttonDelete.addEventListener("click", () => this._handleDelete());
  }

}

