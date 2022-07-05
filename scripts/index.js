const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const editWindow = document.querySelector("#edit");
const addCardWindow = document.querySelector("#addCard");
const editFormElement = editWindow.querySelector(".form");
const addFormElement = addCardWindow.querySelector(".form");
const pictureWindow = document.querySelector("#pictureModal");
const pictureWindowImage = pictureWindow.querySelector(".modal__picture-image");
const pictureWindowText = pictureWindow.querySelector(".modal__picture-text");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const cardTemplate = document.querySelector("#card").content;
const elementsGrid = document.querySelector(".elements__grid");
const titleInput = document.querySelector("#title");
const linkInput = document.querySelector("#link");
const exitButtons = document.querySelectorAll(".modal__container-exit");

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

function handleModalClose (window) {
    window.classList.remove("modal_opened");
}

function handleModalOpen (window) {
    window.classList.add("modal_opened");
}

function handleModalEdit () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    handleModalOpen(editWindow);
}

function handleModalAdd () {
    titleInput.value = "";
    linkInput.value = "";
    handleModalOpen(addCardWindow);
}

function handleModalPicture (evt) {
    const picture = evt.target;
    const pictureSource = evt.target.src;
    const pictureText = evt.target.alt;
    pictureWindowImage.src = pictureSource;
    pictureWindowImage.alt = pictureText;
    pictureWindowText.textContent = pictureText;
    handleModalOpen(pictureWindow);
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    userName = nameInput.value;
    userDescription = descriptionInput.value;
    profileName.textContent = userName;
    profileDescription.textContent = userDescription;
    handleModalClose(editWindow);
}

function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const card = {
        name: titleInput.value,
        link: linkInput.value
    };
    prependCard(card);
    handleModalClose(addCardWindow);
}

function handleLikeButton (evt) {
    const likeButton = evt.target;
    likeButton.classList.toggle("card__bottom-button_clicked");
}

function handleDeleteButton (evt) {
    evt.target.closest(".card").remove();
}

function createCard(data) {
    let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    let cardImage = cardElement.querySelector(".card__image");
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__bottom-text").textContent = data.name;
    const likeButton = cardElement.querySelector(".card__bottom-button");
    likeButton.addEventListener("click", handleLikeButton);
    const deleteButton = cardElement.querySelector(".card__delete");
    deleteButton.addEventListener("click", handleDeleteButton);
    cardImage.addEventListener("click", handleModalPicture);
    return cardElement;
}

function prependCard(data) {
    let cardElement = createCard(data);
    elementsGrid.prepend(cardElement);
}

cardsList.forEach(prependCard);

exitButtons.forEach((button) => {
    const window = button.closest(".modal");
    button.addEventListener("click", () => handleModalClose(window));
});

editButton.addEventListener("click", handleModalEdit);
addButton.addEventListener("click", handleModalAdd);
editFormElement.addEventListener("submit", handleEditFormSubmit);
addFormElement.addEventListener("submit", handleAddFormSubmit);