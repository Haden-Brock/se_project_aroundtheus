const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const editWindow = document.querySelector("#edit");
const addCardWindow = document.querySelector("#addCard");
const editExitButton = editWindow.querySelector(".modal__container-exit");
const addCardExitButton = addCardWindow.querySelector(".modal__container-exit");
const editFormElement = editWindow.querySelector(".form");
const addFormElement = addCardWindow.querySelector(".form");
const pictureWindow = document.querySelector("#pictureModal");
const pictureWindowImage = pictureWindow.querySelector(".modal__picture-image");
const pictureWindowText = pictureWindow.querySelector(".modal__picture-text");
const pictureWindowExit = pictureWindow.querySelector(".modal__picture-exit");
let profileName = document.querySelector(".profile__info-name");
let profileDescription = document.querySelector(".profile__info-description");
let nameInput = document.querySelector("#name");
let descriptionInput = document.querySelector("#description");
let cardTemplate = document.querySelector("#card").content;
let elementsGrid = document.querySelector(".elements__grid");
let titleInput = document.querySelector("#title");
let linkInput = document.querySelector("#link");

let cardsList = [
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

function handleModalToggle (evt) {
    let window;
    let buttonClass = evt.target.className;   
    if (buttonClass.includes("exit")) {
        window = evt.target.parentElement.parentElement;
    } else if (evt.target.className === "card__image"){
        window = pictureWindow;
    } else {
        const id = evt.target.id;
        switch (id) {
            case "editOpen":
            case "editSubmit":
                window = editWindow;
                break;
            case "addOpen":
            case "addSubmit":
                window = addCardWindow;
                break;
        }
    }
    window.classList.toggle("modal_opened");
    if (editWindow.classList.contains("modal_opened")) {
        nameInput.value = profileName.textContent;
        descriptionInput.value = profileDescription.textContent;
    }
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    userName = nameInput.value;
    userDescription = descriptionInput.value;
    profileName.textContent = userName;
    profileDescription.textContent = userDescription;
    handleModalToggle(evt);
}

function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const card = {
        name: titleInput.value,
        link: linkInput.value
    };
    cardsList.push(card);
    getCardElement(card);
    handleModalToggle(evt);
}

function handleLikeButton (evt) {
    const likeButton = evt.target;
    likeButton.classList.toggle("card__bottom-button_clicked");
}

function handleDeleteButton (evt) {
    evt.target.parentElement.remove();
}

function handlePictureModal (evt) {
    const picture = evt.target;
    const pictureSource = evt.target.src;
    const pictureText = evt.target.alt;
    pictureWindowImage.src = pictureSource;
    pictureWindowImage.alt = pictureText;
    pictureWindowText.textContent = pictureText;
    handleModalToggle(evt);
}

function getCardElement(data) {
    let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    let cardImage = cardElement.querySelector(".card__image");
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__bottom-text").textContent = data.name;
    elementsGrid.append(cardElement);
    const likeButton = cardElement.querySelector(".card__bottom-button");
    likeButton.addEventListener("click", handleLikeButton);
    const deleteButton = cardElement.querySelector(".card__delete");
    deleteButton.addEventListener("click", handleDeleteButton);
    cardImage.addEventListener("click", handlePictureModal);
}

cardsList.forEach(card => {
    getCardElement(card);
});

editButton.addEventListener("click", handleModalToggle);
addButton.addEventListener("click", handleModalToggle);
editExitButton.addEventListener("click", handleModalToggle);
addCardExitButton.addEventListener("click", handleModalToggle);
pictureWindowExit.addEventListener("click", handleModalToggle);
editFormElement.addEventListener("submit", handleEditFormSubmit);
addFormElement.addEventListener("submit", handleAddFormSubmit);