export default class Card {
    constructor(data, templateSelector, handleCardClick, handleCardDelete, handleCardLike, currentUserId) {
      this.name = data.name;
      this.link = data.link;
      this._likes = data.likes;
      this._id = data._id;
      this._owner = data.owner;
      this._currentUserId = currentUserId;
      this.templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleCardLike = handleCardLike;
      this._handleCardDelete = handleCardDelete;
    }
  
    getId() {
      return this._id;
    }

    _setMarkup() {
      this._cardImage = this._cardElement.querySelector(".card__image");
      this._cardImage.src = this.link;
      this._cardImage.alt = this.name;
      this._cardElement.querySelector(".card__bottom-text").textContent =
        this.name;
    }
  
    _renderLikes() {
      this._cardElement.querySelector(".card__bottom-count").textContent = this._likes.length;
      this.likeButton = this._cardElement.querySelector(".card__bottom-button");
      if (this.isLikedByUser()) {
        this.likeButton.classList.add("card__bottom-button_clicked");
      } else {
        this.likeButton.classList.remove("card__bottom-button_clicked");
      }
        
    }

    setLikes(likes) {
      this._likes = likes;
      this._renderLikes();
    }

    _getTemplateClone() {
      const cloneElement = document
        .querySelector(this.templateSelector)
        .content.querySelector(".card")
        .cloneNode(true);
      return cloneElement;
    }
  
    isLikedByUser() {
      return this._likes.some((like) => like._id === this._currentUserId);
    }
  
    _setEventListeners() {
      this._cardElement
        .querySelector(".card__bottom-button")
        .addEventListener("click", () => {
          this._handleCardLike(this);
        });
  
      this._deleteButton
          .addEventListener("click", () => {
            this._handleCardDelete(this);
          });
      

      this._cardElement
        .querySelector(".card__image")
        .addEventListener("click", () => {
          this._handleCardClick(this);
        });
    }

    deleteCard() {
      this._cardElement.remove();
      this._cardElement = null;
    }
  
    generateCard() {
      this._cardElement = this._getTemplateClone();
      this._deleteButton = this._cardElement.querySelector(".card__delete");
      if (this._currentUserId !== this._owner._id) {
        this._deleteButton.remove();
      }
      this._setMarkup();
      this._setEventListeners();
      this._renderLikes();
      return this._cardElement;
    }
  }
  