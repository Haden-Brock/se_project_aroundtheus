export default class Popup {
    constructor(popupElement) {
      this._popupElement = popupElement;
      this._popupExit = this._popupElement.querySelector(
        ".modal__container-exit"
      );
    }
  
    openPopup() {
      this._popupElement.classList.add("modal_opened");
      document.addEventListener("keydown", this._handleEscClose);
      this._popupElement.addEventListener("mousedown", this._handleClickClose);
    }
  
    closePopup() {
      this._popupElement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this._handleEscClose);
      this._popupElement.removeEventListener("mousedown", this._handleClickClose);
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.closePopup();
      }
    };
  
    _handleClickClose = (evt) => {
      if (evt.target === evt.currentTarget) {
        this.closePopup();
      }
    };
  
    setEventListeners() {
      this._popupExit.addEventListener("click", (evt) => {
        this.closePopup();
      });
    }
  }