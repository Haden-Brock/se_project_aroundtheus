import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
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
  avatarInput,
  avatarPicture,
  avatarWindow,
  avatarButton,  
  deleteWindow
} from "../utils/constants.js";

let currentUserId = null;

const user = new UserInfo(userSelector);

const api = new Api ({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "dfa974a3-627e-4477-8e0f-f2d5983e285f",
    "Content-Type": "application/json"
  }
});

let cardSection;

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userInfoRes, cardRes]) => {
    user.setUserInfo(userInfoRes);
    currentUserId = userInfoRes._id;

    cardSection = new Section(
      {
        data: cardRes,
        renderer: renderCard,
      },
      gridSelector
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const renderCard = (cardItem) => {
  const card = new Card(cardItem, cardTemplate, handleCardClick, handleCardDelete, handleCardLike, currentUserId);
  const cardElement = card.generateCard();

  cardSection.addItem(cardElement);
};

const addForm = new PopupWithForm(addCardWindow, handleAddFormSubmit);
addForm.setEventListeners();

const editForm = new PopupWithForm(editWindow, handleEditFormSubmit);
editForm.setEventListeners();

const avatarForm = new PopupWithForm(avatarWindow, handleAvatarFormSubmit);
avatarForm.setEventListeners();

const deleteForm = new PopupWithConfirm(deleteWindow, handleDeleteFormSubmit);
deleteForm.setEventListeners();

const imagePopup = new PopupWithImage(pictureWindow);
imagePopup.setEventListeners();

function handleCardLike(card) {
  if(!card.isLikedByUser()) {
    api.likeCard(card.getId())
      .then((data) => card.setLikes(data.likes))
      .catch((err) => console.log(err));
  } else {
    api.unlikeCard(card.getId())
      .then((data) => card.setLikes(data.likes))
      .catch((err) => console.log(err));
  }

}

function handleCardClick(card) {
  imagePopup.openPopup(card);
}

function handleCardDelete(card) {
  deleteForm.openPopup(card);
}


function addValidation(settings, formElement) {
  const validationElement = new FormValidator(settings, formElement);
  validationElement.enableValidation();
}

function handleModalEdit() {
  const newUser = user.getUserInfo();
  nameInput.value = newUser.name;
  descriptionInput.value = newUser.about;
  editForm.openPopup();
}

function handleModalAdd() {
  addForm.openPopup();
}

function handleModalAvatar() {
  avatarForm.openPopup();
}

function handleEditFormSubmit() {
  const newName = nameInput.value;
  const newDescription = descriptionInput.value;
  const newUserInfo = { name: newName, about: newDescription };
  editForm.setLoadingText(true);
  api.updateUserInfo(newUserInfo)
    .then(res => {
      user.setUserInfo(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      editForm.setLoadingText(false);
      editForm.closePopup();
    });

  
}

function handleAddFormSubmit() {
  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };
  addForm.setLoadingText(true);
  api.addNewCard(cardData)
    .then(res => {
      renderCard(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      addForm.setLoadingText(false);
      addForm.closePopup();
    });
  
  
}

function handleAvatarFormSubmit() {
  const avatarInfo = {avatar: avatarInput.value};
  
  avatarForm.setLoadingText(true);
  api.updateProfilePicture(avatarInfo)
    .then(res => {
      avatarPicture.src = res.avatar;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      avatarForm.setLoadingText(false);
      avatarForm.closePopup();
    });

  
}

function handleDeleteFormSubmit(card) {
  api.deleteCard(card.getId())
  .then(() => {
    card.deleteCard();
  })
  .catch((err) => {
    console.log(err);
  })

  deleteForm.closePopup();
}

editButton.addEventListener("click", handleModalEdit);
addButton.addEventListener("click", handleModalAdd);
avatarButton.addEventListener("click", handleModalAvatar);


formList.forEach((formElement) => {
  addValidation(settings, formElement);
});


