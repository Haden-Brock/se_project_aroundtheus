import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
const templateSelector = "#card-template";
const elementsGrid = document.querySelector(".elements__grid");

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

function createCard(data) {
    const card = new Card(data, templateSelector);
    const cardElement = card.generateCard();
    return cardElement;
}

function prependCard(cardElement) {
    elementsGrid.prepend(cardElement);
}

function addValidation(settings, formElement) {
    const validationElement = new FormValidator(settings, formElement);
    validationElement.enableValidation();
}

cardsList.forEach((cardData) => {
    const cardElement = createCard(cardData);
    prependCard(cardElement); 
});

formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
    });
    addValidation(settings, formElement);
});

export {prependCard, createCard};

