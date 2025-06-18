export class Card {
  constructor({ name, link }, templateSelector,handleImageClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick; // Guarda la funcion recibida
  }

  // Método público que devuelve la tarjeta lista para insertar en el DOM
  getCardElement() {
    this._element = this._getTemplate();

    this._cardImg = this._element.querySelector(".gallery__card-picture");
    this._cardName = this._element.querySelector(".gallery__card-content-text");
    this._buttonLike = this._element.querySelector(".gallery__card-like-button");
    this._buttonDelete = this._element.querySelector(".gallery__card-button-delete");

    // Inicializamos los eventos externos
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  // Método privado para clonar la plantilla
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".gallery__card")
      .cloneNode(true);

    return cardTemplate;
  }


  // Toggle del like
  _handleLike() {
    const likeIcon = this._buttonLike.querySelector(".gallery__card-like-picture");
    likeIcon.classList.toggle("like");
  }

  // // Eliminar la tarjeta
  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  // Método privado para asignar eventos
  _setEventListeners() {
    this._cardImg.addEventListener("click", () => {
  this._handleImageClick(this._name, this._link);
});

    this._buttonLike.addEventListener("click", () => this._handleLike());
    this._buttonDelete.addEventListener("click", () => this._handleDelete());
  }

}

