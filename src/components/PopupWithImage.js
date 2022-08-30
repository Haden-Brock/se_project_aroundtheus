import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImage = this._popupElement.querySelector(
      ".modal__picture-image"
    );
    this._popupText = this._popupElement.querySelector(".modal__picture-text");
  }

  openPopup(card) {
    this._popupImage.src = card.link;
    this._popupImage.alt = card.name;
    this._popupText.textContent = card.name;
    super.openPopup();
  }
}