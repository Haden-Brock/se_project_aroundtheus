import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".form");
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

    openPopup(card) {
        this._card = card;
        super.openPopup();
    }

    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._card);
        })
    }
}