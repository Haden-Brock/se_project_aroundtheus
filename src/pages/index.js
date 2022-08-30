import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  cardTemplate,
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
  userSelector,
  settings,
  formList,
  cardsList,
} from "../utils/constants.js";

const renderCard = (cardItem) => {
  const card = new Card(cardItem, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();

  cardSection.addItem(cardElement);
};

const cardSection = new Section(
  {
    data: cardsList,
    renderer: renderCard,
  },
  gridSelector
);

const addForm = new PopupWithForm(addCardWindow, handleAddFormSubmit);
addForm.setEventListeners();
const editForm = new PopupWithForm(editWindow, handleEditFormSubmit);
editForm.setEventListeners();

const user = new UserInfo(userSelector);
const imagePopup = new PopupWithImage(pictureWindow);
imagePopup.setEventListeners();

function handleCardClick(card) {
  imagePopup.openPopup(card);
}

function addValidation(settings, formElement) {
  const validationElement = new FormValidator(settings, formElement);
  validationElement.enableValidation();
}

function handleModalEdit() {
  const newUser = user.getUserInfo();
  nameInput.value = newUser.name;
  descriptionInput.value = newUser.description;
  editForm.openPopup();
}

function handleModalAdd() {
  addForm.openPopup();
}

function handleEditFormSubmit() {
  const newName = nameInput.value;
  const newDescription = descriptionInput.value;
  const newUserInfo = { name: newName, description: newDescription };
  user.setUserInfo(newUserInfo);
  editForm.closePopup();
}

function handleAddFormSubmit(evt) {
  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };
  renderCard(cardData);
  addForm.closePopup();
}

cardSection.renderItems();

editButton.addEventListener("click", handleModalEdit);
addButton.addEventListener("click", handleModalAdd);

formList.forEach((formElement) => {
  addValidation(settings, formElement);
});


