import "./styles/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import {cardTemplate, 
        gridSelector, 
        nameInput, 
        descriptionInput, 
        titleInput, 
        linkInput, 
        addCardWindow, 
        editButton, 
        addButton, 
        editWindow, 
        pictureWindow, 
        userData, 
        settings, 
        formList, 
        cardsList} from "./utils/constants.js";

const cardSection = new Section({
    data: cardsList, 
    renderer: (cardItem) => {
        const card = new Card (cardItem, cardTemplate, handleCardClick);
        const cardElement = card.generateCard();

        cardSection.setItem(cardElement);
        }
    },
    gridSelector
);

const addForm = new PopupWithForm(addCardWindow, handleAddFormSubmit);
addForm.setEventListeners();
const editForm = new PopupWithForm(editWindow, handleEditFormSubmit);
editForm.setEventListeners();

const user = new UserInfo(userData);

function handleCardClick(card) {
    const imagePopup = new PopupWithImage(pictureWindow, card);
    imagePopup.openPopup();
}

function addValidation(settings, formElement) {
    const validationElement = new FormValidator(settings, formElement);
    validationElement.enableValidation();
}

function handleModalEdit () {
    const newUser = user.getUserInfo();
    nameInput.value = newUser.name;
    descriptionInput.value = newUser.description;
    editForm.openPopup();
}

function handleModalAdd () {
    addForm.openPopup();
}

function handleEditFormSubmit () {
    user.setUserInfo();
    editForm.closePopup();
}

function handleAddFormSubmit (evt) {
    const cardData = {
        name: titleInput.value,
        link: linkInput.value
    };
    const card = new Card(cardData, cardTemplate, handleCardClick);
    const cardElement = card.generateCard();
    cardSection.setItem(cardElement);
    addForm.closePopup();
    evt.target.reset();
}

cardSection.renderItems();

editButton.addEventListener("click", handleModalEdit);
addButton.addEventListener("click", handleModalAdd);

formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
    });
    addValidation(settings, formElement);
});


