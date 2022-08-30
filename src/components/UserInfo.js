import {nameInput, descriptionInput} from "../utils/constants.js";

export default class UserInfo {
    constructor({ name, description }) {
        this._name = name;
        this._description = description;
        this._nameContainer = document.querySelector(".profile__info-name");
        this._descriptionContainer = document.querySelector(".profile__info-description");
    }

    getUserInfo() {
        this._user = {name: this._name, description: this._description};

        return this._user;
    }

    setUserInfo() {
        this._name = nameInput.value;
        this._description = descriptionInput.value;
        this._nameContainer.textContent = this._name;
        this._descriptionContainer.textContent = this._description;
    }
}