let butedit = document.querySelector(".profile__info-edit-button");
let popup = document.querySelector(".popup");
let butclosed = document.querySelector(".popup__button-closed");
let form = document.querySelector(".popup__container");
let inputname = document.querySelector(".popup__input-name");
let inputabout = document.querySelector(".popup__input-about");
let profname = document.querySelector(".profile__info-name");
let profabout = document.querySelector(".profile__info-details");
let butsave = document.querySelector(".popup__container-save");

function openedit(){
inputname.value=profname.textContent;
inputabout.value=profabout.textContent;
popup.classList.toggle("popup__opened");
}
butedit.addEventListener("click", openedit);
butclosed.addEventListener("click", openedit);

function savechange(e){
  e.preventDefault();
  profname.textContent=inputname.value;
  profabout.textContent=inputabout.value;
  openedit();
}
form.addEventListener("submit", savechange);

