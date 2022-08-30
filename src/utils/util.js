export {openModal, closeModal};

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
    if(evt.key === "Escape") {
        const modal = document.querySelector(".modal_opened");
        closeModal(modal);
    }
}