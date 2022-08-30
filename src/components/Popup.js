export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupExit = this._popupSelector.querySelector(".modal__container-exit");
    }

    openPopup() {
        this._popupSelector.classList.add("modal_opened");
    }

    closePopup() {
        this._popupSelector.classList.remove("modal_opened");
    }

    _handleEscClose(evt) {
        if(evt.key === "Escape") {
            this.closePopup();
        }
    }

    _handleClickClose(evt) {
        if(evt.target === evt.currentTarget) {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popupExit.addEventListener("click", (evt) => {
            this.closePopup();
        });
        this._popupSelector.addEventListener("click", (evt) => {
            this._handleClickClose(evt);
        });
        document.addEventListener("keydown", (evt) => {
            this._handleEscClose(evt);
        });
    }
}