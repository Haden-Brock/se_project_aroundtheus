import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupSelector.querySelector(".form");
    }

    _getInputValues() {
        this._inputList = this._formElement.querySelectorAll(".form__input");
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setEventListeners() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());

            this._formElement.reset();
        });

        super.setEventListeners();
    }

    closePopup() {
        super.closePopup();
        this._formElement.reset();
    }
}