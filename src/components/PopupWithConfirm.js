import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._formElement = this._popupElement.querySelector(".form");
        this._buttonTextContainer = this._formElement.querySelector(".form__save");
        this._defaultButtonText = this._buttonTextContainer.textContent;
    }

    setLoadingText(isLoading) {
        if (isLoading) {
            this._buttonTextContainer.textContent = "Deleting..."; 
        } else {
            this._buttonTextContainer.textContent = this._defaultButtonText;
        }
    }

    openPopup(handleFormSubmit) {
        this._handleFormSubmit = handleFormSubmit;
        super.openPopup();
    }

    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        })
    }
}