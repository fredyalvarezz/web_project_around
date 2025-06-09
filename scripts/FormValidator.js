export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
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

  _toggleButtonState(button) {
    const inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const isValid = inputs.every((input) => input.validity.valid);

    if (isValid) {
      button.disabled = false;
      button.classList.remove(this._config.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(this._config.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const inputs = this._formElement.querySelectorAll(this._config.inputSelector);
    const button = this._formElement.querySelector(this._config.submitButtonSelector);

    this._toggleButtonState(button);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(button);
      });
    });

    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

  };



  enableValidation() {
    this._setEventListeners();
  };


  resetValidation() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const button = this._formElement.querySelector(this._config.submitButtonSelector);

    inputs.forEach((input) => {
      this._hideError(input);
    });

    this._toggleButtonState(button);
  };
}



