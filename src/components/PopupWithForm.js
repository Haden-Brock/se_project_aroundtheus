import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".form");
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._buttonTextContainer = this._formElement.querySelector(".form__save");
    this._defaultButtonText = this._buttonTextContainer.textContent;
  }

  setLoadingText(isLoading) {
    if (isLoading) {
        this._buttonTextContainer.textContent = "Saving..."; 
    } else {
        this._buttonTextContainer.textContent = this._defaultButtonText;
    }
  }
  
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => (formValues[input.name] = input.value));

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