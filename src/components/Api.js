export default class Api {
    constructor(options) {
        this.options = options;
        this.baseUrl = this.options.baseUrl;
        this.headers = this.options.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {headers: this.headers})
            .then(res => this._handleResponse(res));
    } 

    getUserData() {
        return fetch(`${this.baseUrl}/users/me`, {headers: this.headers})
        .then(res => this._handleResponse(res));
    }

    updateUserInfo(userObj) {
        return fetch(
            `${this.baseUrl}/users/me`, {
                method: "PATCH", 
                headers: this.headers, 
                body: JSON.stringify(userObj)
            }
        )
        .then(res => this._handleResponse(res));
    }

    updateProfilePicture(info) {
        return fetch(
            `${this.baseUrl}/users/me/avatar`, {
                method: "PATCH", 
                headers: this.headers, 
                body: JSON.stringify(info)
            }
        )
        .then(res => this._handleResponse(res));
    }
    
    addNewCard(card) {
        return fetch(
            `${this.baseUrl}/cards`, {
                method: "POST", 
                headers: this.headers,
                body: JSON.stringify({
                    name: card.name, 
                    link: card.link
                })
            }
        )
        .then(res => this._handleResponse(res));
    }

    deleteCard(cardId) {
        return fetch(
            `${this.baseUrl}/cards/${cardId}`, {
                method: "DELETE", 
                headers: this.headers
            }
        )
        .then(res => this._handleResponse(res));
    }

    likeCard(cardId) {
        return fetch(
            `${this.baseUrl}/cards/likes/${cardId}`, {
                method: "PUT", 
                headers: this.headers
            }
        )
        .then(res => this._handleResponse(res));
    }

    unlikeCard(cardId) {
        return fetch(
            `${this.baseUrl}/cards/likes/${cardId}`, {
                method: "DELETE", 
                headers: this.headers
            }
        )
        .then(res => this._handleResponse(res));
    }
}