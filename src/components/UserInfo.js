export default class UserInfo {
    constructor({ nameSelector, descriptionSelector, avatarSelector}) {
      this._nameContainer = document.querySelector(nameSelector);
      this._descriptionContainer = document.querySelector(descriptionSelector);
      this._avatarContainer = document.querySelector(avatarSelector);
    }
  
    getUserInfo() {
      return {
        name: this._nameContainer.textContent,
        about: this._descriptionContainer.textContent,
        avatar: this._avatarContainer.src
      };
    }
  
    setUserInfo({ name, about, avatar}) {
      this._nameContainer.textContent = name;
      this._descriptionContainer.textContent = about;
      this._avatarContainer.src = avatar;
    }
  }