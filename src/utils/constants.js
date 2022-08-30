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
const pictureWindow = document.querySelector("#pictureModal");
const userSelector = {nameSelector: ".profile__info-name", descriptionSelector: ".profile__info-description"};

const settings = {
    formSelector: ".form", 
    inputSelector: ".form__input", 
    submitButtonSelector: ".form__save", 
    inactiveButtonClass: "form__save_disabled", 
    inputErrorClass: "form__input_type_error", 
    errorClass: "form__input-error_active"
}
const formList = Array.from(document.querySelectorAll(settings.formSelector));

const cardsList = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

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
    pictureWindow,
    userSelector,   
    settings, 
    formList, 
    cardsList};