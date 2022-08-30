import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".form");
        this._inputList = this._formElement.querySelectorAll(".form__input");
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => formValues[input.name] = input.value);

        return formValues;
    }

    setEventListeners() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });

        super.setEventListeners();
    }

    closePopup() {
        super.closePopup();
        this._formElement.reset();
    }
}