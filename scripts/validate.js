const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".form"));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement);
    });
};

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".form__save");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

function isValid(formElement, inputElement) {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
}

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add("form__save_disabled");
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove("form__save_disabled");
        buttonElement.disabled = false;
    }
}

enableValidation({
    formSelector: ".form", 
    inputSelector: ".form__input", 
    submitButtonSelector: "form__save", 
    inactiveButtonClass: "form__save_disabled", 
    inputErrorClass: "form__input_type_error", 
    errorClass: "form__input-error_active"
});