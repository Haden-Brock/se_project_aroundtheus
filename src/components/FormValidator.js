export default class FormValidator {
    constructor(settings, formElement) {
        this.settings = settings;
        this.formElement = formElement;
        this._inputList = Array.from(this.formElement.querySelectorAll(this.settings.inputSelector));
        this._buttonElement = this.formElement.querySelector(this.settings.submitButtonSelector);
    }

    enableValidation() {
        this._setEventListeners();
    }

    _setEventListeners() {  
        this._toggleButtonState();
        this.formElement.addEventListener("submit", () => {
            this._resetValidation();
        });
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._isValid(inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            });
        }); 
    }

    _isValid(inputElement) {
        if(!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.settings.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.settings.inputErrorClass);
        errorElement.classList.remove(this.settings.errorClass);
        errorElement.textContent = "";    
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if(this._hasInvalidInput(this._inputList)){
            this._buttonElement.classList.add(this.settings.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this.settings.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

}