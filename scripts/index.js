const editButton = document.querySelector(".profile__edit");
const modalWindow = document.querySelector(".modal");
const exitButton = document.querySelector(".modal__container-exit");
const formElement = document.querySelector(".form");
let profileName = document.querySelector(".profile__info-name");
let profileDescription = document.querySelector(".profile__info-description");
let nameInput = document.querySelector("#name");
let descriptionInput = document.querySelector("#description");
let cardTemplate = document.querySelector("#card").content;
let elementsGrid = document.querySelector(".elements__grid");

function handleModalToggle() {
    modalWindow.classList.toggle("modal_opened");
    if (modalWindow.classList.contains("modal_opened")) {
        nameInput.value = profileName.textContent;
        descriptionInput.value = profileDescription.textContent;
    }
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName = nameInput.value;
    userDescription = descriptionInput.value;
    profileName.textContent = userName;
    profileDescription.textContent = userDescription;
    handleModalToggle();
}

let yosemite = {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
};

let louise = {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
};

let baldMountains = {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
};

let latemar = {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
};

let vanoise = {
    name: "Vanoise National Park", 
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
};

let lago = {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
};

let initialCardsList = [yosemite, louise, baldMountains, latemar, vanoise, lago];

function getCardElement(data) {
    let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    let cardImage = cardElement.querySelector(".card__image");
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__bottom-text").textContent = data.name;
    elementsGrid.append(cardElement);
}

for(let i = 0; i < 6; i++) {
    getCardElement(initialCardsList[i]);
}

editButton.addEventListener("click", handleModalToggle);
exitButton.addEventListener("click", handleModalToggle);
formElement.addEventListener("submit", handleFormSubmit);
