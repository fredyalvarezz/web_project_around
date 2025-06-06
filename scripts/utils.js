export class CardEvents {
  constructor(cardIntance) {
    this.card = cardIntance;

  }
  handleOpenImage() {
    this.card._cardImg.classList.add("gallery__card-picture-big");
    this.card._element.classList.add("gallery__popup-img");
    this.card._buttonClose.classList.add("gallery__img-closed-show");
    this.card._cardName.classList.add("gallery__card-content-text-big");
    this.card._cardTextContainer.classList.add("gallery__card-content-big");
    this.card._buttonLike.classList.add("gallery__card-like-button-hiden");
    this.card._buttonDelete.classList.add("gallery__card-button-delete-hiden");
  }

  handleCloseImage() {
    this.card._cardImg.classList.remove("gallery__card-picture-big");
    this.card._element.classList.remove("gallery__popup-img");
    this.card._buttonClose.classList.remove("gallery__img-closed-show");
    this.card._cardName.classList.remove("gallery__card-content-text-big");
    this.card._cardTextContainer.classList.remove("gallery__card-content-big");
    this.card._buttonLike.classList.remove("gallery__card-like-button-hiden");
    this.card._buttonDelete.classList.remove("gallery__card-button-delete-hiden");
  }

  handleOverlayClick(evt) {
    if (evt.target.classList.contains("gallery__popup-img")) {
      this.handleCloseImage();
    }
  }
}
