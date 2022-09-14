export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
            .then(this._handleResponse);
    } 

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {headers: this._headers})
        .then(this._handleResponse);
    }

    updateUserInfo(userObj) {
        return fetch(
            `${this._baseUrl}/users/me`, {
                method: "PATCH", 
                headers: this._headers, 
                body: JSON.stringify(userObj)
            }
        )
        .then(this._handleResponse);
    }

    updateProfilePicture(info) {
        return fetch(
            `${this._baseUrl}/users/me/avatar`, {
                method: "PATCH", 
                headers: this._headers, 
                body: JSON.stringify(info)
            }
        )
        .then(this._handleResponse);
    }
    
    addNewCard(card) {
        return fetch(
            `${this._baseUrl}/cards`, {
                method: "POST", 
                headers: this._headers,
                body: JSON.stringify({
                    name: card.name, 
                    link: card.link
                })
            }
        )
        .then(this._handleResponse);
    }

    deleteCard(cardId) {
        return fetch(
            `${this._baseUrl}/cards/${cardId}`, {
                method: "DELETE", 
                headers: this._headers
            }
        )
        .then(this._handleResponse);
    }

    likeCard(cardId) {
        return fetch(
            `${this._baseUrl}/cards/likes/${cardId}`, {
                method: "PUT", 
                headers: this._headers
            }
        )
        .then(this._handleResponse);
    }

    unlikeCard(cardId) {
        return fetch(
            `${this._baseUrl}/cards/likes/${cardId}`, {
                method: "DELETE", 
                headers: this._headers
            }
        )
        .then(this._handleResponse);
    }
}