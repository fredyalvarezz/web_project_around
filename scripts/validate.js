const showError = (input, config) => {
  const inputElement = document.querySelector('#${input.id}-error');
  inputElement.textContent = input.validationMessage;
  inputElement.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
};

const hideError = (input, config) => {
  const inputElement = document.querySelector('#${input.id}-error');
  inputElement.textContent = "";
  inputElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);

};

const checkInputValidity = (input, config) => {
  if (input.validity.valid) {
    hideError(input, config);

  } else {
    showError(input, config);
  }
};

//const togglebuttonState = (form, button, config) => {

//}

const setEventListeners = (form, config) => {
  const inputs = form.querySelectorAll(config.inputSelector);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, config);
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

};

export const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);
  });
};