import {openModal} from "./util.js";

export default class Card {
    constructor(data, templateSelector) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
    }

    _setMarkup() { 
        this._cardElement.querySelector(".card__image").src = this.link;
        this._cardElement.querySelector(".card__image").alt = this.name;
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

    _handleModalPicture(evt) {
        const picture = evt.target;
        const pictureSource = evt.target.src;
        const pictureText = evt.target.alt;
        const pictureWindow = document.querySelector("#pictureModal");
        const pictureWindowImage = pictureWindow.querySelector(".modal__picture-image");
        const pictureWindowText = pictureWindow.querySelector(".modal__picture-text");
        pictureWindowImage.src = pictureSource;
        pictureWindowImage.alt = pictureText;
        pictureWindowText.textContent = pictureText;
        openModal(pictureWindow);
    }

    _setEventListeners() {
        this._cardElement.querySelector(".card__bottom-button").addEventListener("click", (evt) => {
            this._handleLikeButton(evt);
        });
        
        this._cardElement.querySelector(".card__delete").addEventListener("click", (evt) => {
            this._handleDeleteButton(evt);
        });
        
        this._cardElement.querySelector(".card__image").addEventListener("click", (evt) => {
            this._handleModalPicture(evt);
        });
    }

    generateCard() {
        this._cardElement = this._getTemplateClone();
        this._setMarkup();
        this._setEventListeners();
        return this._cardElement;
    }
}