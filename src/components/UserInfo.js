export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
      this._nameContainer = document.querySelector(nameSelector);
      this._descriptionContainer = document.querySelector(descriptionSelector);
    }
  
    getUserInfo() {
      return {
        name: this._nameContainer.textContent,
        description: this._descriptionContainer.textContent,
      };
    }
  
    setUserInfo({ name, description }) {
      this._nameContainer.textContent = name;
      this._descriptionContainer.textContent = description;
    }
  }