export class FormValidator {
  constructor(config) {
    this._config = config;
  }

  _showError(input) {
    const inputElement = document.querySelector(`#${input.id}-error`);
    inputElement.textContent = input.validationMessage;
    inputElement.classList.add(this._config.errorClass);
  }

  _hideError(input) {
    const inputElement = document.querySelector(`#${input.id}-error`);
    inputElement.textContent = "";
    inputElement.classList.remove(this._config.errorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideError(input);

    } else {
      this._showError(input);
    }
  }

  _toggleButtonState(form, button) {
    const inputs = Array.from(form.querySelectorAll(this._config.inputSelector));
    const isValid = inputs.every((input) => input.validity.valid);

    if (isValid) {
      button.disabled = false;
      button.classList.remove(this._config.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(this._config.inactiveButtonClass);
    }
  }

  _setEventListeners(form) {
    const inputs = form.querySelectorAll(this._config.inputSelector);
    const button = form.querySelector(this._config.submitButtonSelector);

    this._toggleButtonState(form, button);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(form, button);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

  };


  static resetValidation() {
    const formReset = Array.from(document.querySelectorAll(".popup__container"));
    formReset.forEach((form) => {
      form.reset();
    });
  };

  enableValidation() {
    const forms = document.querySelectorAll(this._config.formSelector);
    forms.forEach((form) => {
      this._setEventListeners(form);
    });
  };

};




//Cómo usarla:
//js
//Copiar código
//const config = {
//formSelector: '.form',
//inputSelector: '.form__input',
//submitButtonSelector: '.form__submit',
//inactiveButtonClass: 'form__submit_disabled',
//errorClass: 'form__input-error_visible'
//};

//const validator = new FormValidator(config);
//validator.enableValidation();

// Para resetear todos los formularios
//FormValidator.resetValidation();