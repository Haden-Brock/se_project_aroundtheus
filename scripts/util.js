import {prependCard, createCard} from "./index.js";
const nameInput = document.querySelector("#name-input");
const descriptionInput = document.querySelector("#description-input");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
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


function closeModal (modal) {
    modal.classList.remove("modal_opened");
    modal.removeEventListener("mousedown", closeModalOnClick);
    document.removeEventListener("keydown", closeModalOnEsc);
}

function openModal (modal) {
    modal.classList.add("modal_opened");
    modal.addEventListener("mousedown", closeModalOnClick);
    document.addEventListener("keydown", closeModalOnEsc);
}

function closeModalOnClick (evt) {
    if(evt.target === evt.currentTarget) {
        closeModal(evt.target);
    }
}

function closeModalOnEsc (evt) {
    console.log(evt.key);
    if(evt.key === "Escape") {
        const modal = document.querySelector(".modal_opened");
        closeModal(modal);
    }
}

function handleModalEdit () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openModal(editWindow);
}

function handleModalAdd () {
    openModal(addCardWindow);
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    const userName = nameInput.value;
    const userDescription = descriptionInput.value;
    profileName.textContent = userName;
    profileDescription.textContent = userDescription;
    closeModal(editWindow);
}

function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const card = {
        name: titleInput.value,
        link: linkInput.value
    };
    const cardElement = createCard(card);
    prependCard(cardElement);
    closeModal(addCardWindow);
    evt.target.reset();
    saveButtonAdd.disabled = true;
    saveButtonAdd.classList.add("form__save_disabled");
}

exitButtons.forEach((button) => {
    const window = button.closest(".modal");
    button.addEventListener("click", () => closeModal(window));
});

editButton.addEventListener("click", handleModalEdit);
addButton.addEventListener("click", handleModalAdd);
editFormElement.addEventListener("submit", handleEditFormSubmit);
addFormElement.addEventListener("submit", handleAddFormSubmit);

export {openModal};