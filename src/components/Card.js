export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _setMarkup() { 
        this._cardImage = this._cardElement.querySelector(".card__image");
        this._cardImage.src = this.link;
        this._cardImage.alt = this.name;
        this._cardElement.querySelector(".card__bottom-text").textContent = this.name;
    }

    _getTemplateClone() {
        const cloneElement = 
            document
            .querySelector(this.templateSelector)
            .content
            .querySelector(".card")
            .cloneNode(true);
        return cloneElement;
    }

    _handleLikeButton(evt) {
        const likeButton = evt.target;
        likeButton.classList.toggle("card__bottom-button_clicked");
    }

    _handleDeleteButton(evt) {
        evt.target.closest(".card").remove();
    }

    _setEventListeners() {
        this._cardElement.querySelector(".card__bottom-button").addEventListener("click", (evt) => {
            this._handleLikeButton(evt);
        });
        
        this._cardElement.querySelector(".card__delete").addEventListener("click", (evt) => {
            this._handleDeleteButton(evt);
        });
        
        this._cardElement.querySelector(".card__image").addEventListener("click", (evt) => {
            this._handleCardClick(this);
        });
    }

    generateCard() {
        this._cardElement = this._getTemplateClone();
        this._setMarkup();
        this._setEventListeners();
        return this._cardElement;
    }
}