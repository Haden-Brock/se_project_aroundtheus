const cardTemplate = "#card-template";
const elementsGrid = document.querySelector(".elements__grid");
const gridSelector = ".elements__grid";
const nameInput = document.querySelector("#name-input");
const descriptionInput = document.querySelector("#description-input");
const profileName = document.querySelector(".profile__info-name").textContent;
const profileDescription = document.querySelector(".profile__info-description").textContent;
const titleInput = document.querySelector("#title-input");
const linkInput = document.querySelector("#link-input");
const addCardWindow = document.querySelector("#addCard");
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const editWindow = document.querySelector("#edit");
const editFormElement = editWindow.querySelector(".form");
const addFormElement = addCardWindow.querySelector(".form");
const exitButtons = document.querySelectorAll(".modal__container-exit");
const saveButtonAdd = addFormElement.querySelector("button");
const avatarWindow = document.querySelector("#editAvatar");
const avatarInput = avatarWindow.querySelector("#avatar-link-input");
const avatarPicture = document.querySelector(".profile__image-avatar");
const avatarButton = document.querySelector("#editAvatarButton");
const pictureWindow = document.querySelector("#pictureModal");
const deleteWindow = document.querySelector("#deleteCardModal");
const userSelector = {nameSelector: ".profile__info-name", descriptionSelector: ".profile__info-description", avatarSelector: ".profile__image-avatar"};

const settings = {
    formSelector: ".form", 
    inputSelector: ".form__input", 
    submitButtonSelector: ".form__save", 
    inactiveButtonClass: "form__save_disabled", 
    inputErrorClass: "form__input_type_error", 
    errorClass: "form__input-error_active"
}

const editFormSelector = document.querySelector("#editSubmit");
const addFormSelector = document.querySelector("#addSubmit");
const avatarFormSelector = document.querySelector("#avatarSubmit");

export {cardTemplate, 
    elementsGrid,
    gridSelector, 
    nameInput, 
    descriptionInput, 
    profileName, 
    profileDescription, 
    titleInput, 
    linkInput, 
    addCardWindow, 
    editButton, 
    addButton, 
    editWindow, 
    editFormElement, 
    addFormElement, 
    exitButtons, 
    saveButtonAdd,
    avatarWindow,
    avatarInput,
    avatarPicture,
    avatarButton,
    pictureWindow,
    deleteWindow,
    userSelector,   
    settings, 
    editFormSelector, 
    addFormSelector, 
    avatarFormSelector
};