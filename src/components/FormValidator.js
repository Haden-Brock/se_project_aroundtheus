export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._inputList = Array.from(
        this._formElement.querySelectorAll(this._settings.inputSelector)
      );
      this._buttonElement = this._formElement.querySelector(
        this._settings.submitButtonSelector
      );
    }
  
    enableValidation() {
      this._setEventListeners();
    }
  
    _setEventListeners() {
      this._formElement.addEventListener("reset", () => {
        this.resetValidation();
      });
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._toggleInputError(inputElement);
          this._toggleButtonState(this._inputList, this._buttonElement);
        });
      });
    }
  
    _toggleInputError(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._settings.errorClass);
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.classList.remove(this._settings.errorClass);
      errorElement.textContent = "";
    }
  
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    _enableButton() {
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }

    _disableButton() {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    }
  
    _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._disableButton();
      } else {
        this._enableButton();
      }
    }
  
    resetValidation() {
      this._disableButton();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
  }