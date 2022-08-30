import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, cardSelector) {
        super(popupSelector);
        this._imageSource = cardSelector.link;
        this._imageText = cardSelector.name;
        this._popupImage = this._popupSelector.querySelector(".modal__picture-image");
        this._popupText = this._popupSelector.querySelector(".modal__picture-text");
    }

    openPopup(){
        this._popupImage.src = this._imageSource;
        this._popupImage.alt = this._imageText;
        this._popupText.textContent = this._imageText;
        super.setEventListeners();
        super.openPopup();
    }
}