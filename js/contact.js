const contactForm = document.querySelector("#contact-form");
// input for name and error
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

// input for email and error
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

// input for the message and error
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

// submit success
const submitted = document.querySelector(".success");
submitted.innerHTML = "Your form was submitted!";
submitted.style.display = "none";

//____________________________________________________________

// Form validation
contactForm.addEventListener("submit", validate);

function validate() {
    event.preventDefault();

    // name
    const nameValue = name.value;

    if (validateLength(nameValue, 1) === true) {
        nameError.style.display = "none";
        nameHasError = false;
    } else {
        nameError.style.display = "block";
        nameHasError = true;
    }

    // email
    const emailValue = email.value;

    if (validateEmail(emailValue, 1) === true) {
        emailError.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailHasError = true;
    }

    // message
    const messageValue = message.value;

    if (validateLength(messageValue, 5) === true) {
        messageError.style.display = "none";
        messageHasError = false;
    } else {
        messageError.style.display = "block";
        messageHasError = false;
    }

    if (
        nameHasError === true ||
        emailHasError === true ||
        messageHasError === true
    ) {
        submitted.style.display = "none";
    } else {
        window.location.href = "success.html";
    }
}

// length validation
function validateLength(value, checkLength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= checkLength) {
        return true;
    } else {
        return false;
    }
}

// email regex validation
function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}