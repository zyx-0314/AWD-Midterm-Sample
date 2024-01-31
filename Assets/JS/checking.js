const captchaContainer = document.getElementById("_captchaContainer");
const captchaCode = document.getElementById("_captchaCode");
const captchaInput = document.getElementById("_captchaInput");
const captchaReset = document.getElementById("_captchaReset");

const signUpBtn = document.getElementById("_signUpBtn");

const email = document.getElementById("_newEmail");
const username = document.getElementById("_newUsername");

const lengthWarning = document.getElementById("_lengthWarning");
const numberWarning = document.getElementById("_numberWarning");
const specialWarning = document.getElementById("_specialWarning");
const upperCaseWarning = document.getElementById("_upperCaseWarning");
const lowerCaseWarning = document.getElementById("_lowerCaseWarning");
const labelNewPasswordIndicators = document.getElementById("_labelNewPassword").querySelector(".indicator");
const newPassword = document.getElementById("_newPassword");

const confirmationPassword = document.getElementById("_confirmationPassword");
const labelConfirmationPasswordIndicator = document
.getElementById("_labelConfirmationPassword")
.querySelector(".indicator");

function generateCaptcha() {
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += String.fromCharCode(Math.floor(Math.random() * 77) + 48);
    }
    captchaCode.innerHTML = code;
}

function toggleSignup() {
    if (captchaInput.value === captchaCode.innerHTML) {
        signUpBtn.classList.add("accent");
        signUpBtn.classList.remove("disable");
    } else {
        signUpBtn.classList.remove("accent");
        signUpBtn.classList.add("disable");
    }
}

function resetCaptcha() {
    generateCaptcha();
    captchaInput.value = "";
    toggleSignup();
}

function checkPassword() {
    if (newPassword.value !== confirmationPassword.value || newPassword.value.length === 0) {
        toggleClass(labelConfirmationPasswordIndicator.querySelector(".fa-circle-xmark"), "active", false);
        toggleClass(labelConfirmationPasswordIndicator.querySelector(".fa-circle-check"), "active", true);
        toggleClass();
        captchaContainer.classList.add("disable");
        captchaInput.setAttribute("disabled", "");
    } else {
        generateCaptcha();
        toggleClass(labelConfirmationPasswordIndicator.querySelector(".fa-circle-check"), "active", false);
        toggleClass(labelConfirmationPasswordIndicator.querySelector(".fa-circle-xmark"), "active", true);
        captchaContainer.classList.remove("disable");
        captchaInput.removeAttribute("disabled");
    }
}

function toggleClass(element, className, state) {
    if (state) {
        element.classList.remove(className);
        return 0;
    } else {
        element.classList.add(className);
        return 1;
    }
}

newPassword.addEventListener("input", () => {
    var value = 0;

    value += /\d/.test(newPassword.value)
        ? toggleClass(numberWarning, "active", false)
        : toggleClass(numberWarning, "active", true);
    value += /[\W]/.test(newPassword.value)
        ? toggleClass(specialWarning, "active", false)
        : toggleClass(specialWarning, "active", true);
    value += /[A-Z]/.test(newPassword.value)
        ? toggleClass(upperCaseWarning, "active", false)
        : toggleClass(upperCaseWarning, "active", true);
    value += /[a-z]/.test(newPassword.value)
        ? toggleClass(lowerCaseWarning, "active", false)
        : toggleClass(lowerCaseWarning, "active", true);
    value +=
        newPassword.value.length >= 8
            ? toggleClass(lengthWarning, "active", false)
            : toggleClass(lengthWarning, "active", true);

    if (value === 5) {
        toggleClass(labelNewPasswordIndicators.querySelector(".fa-circle-xmark"), "active", true);
        toggleClass(labelNewPasswordIndicators.querySelector(".fa-circle-check"), "active", false);
        console.log(email.value);

        if (email.value.length > 0 && username.value.length > 0) {
            confirmationPassword.value = "";
            confirmationPassword.removeAttribute("disabled");
            confirmationPassword.classList.remove("disable");
        }
    } else {
        toggleClass(labelNewPasswordIndicators.querySelector(".fa-circle-check"), "active", true);
        toggleClass(labelNewPasswordIndicators.querySelector(".fa-circle-xmark"), "active", false);
    }
});

confirmationPassword.addEventListener("input", () => {
    checkPassword();
});

captchaReset.addEventListener("click", () => {
    resetCaptcha();
});

captchaInput.addEventListener("input", () => {
    toggleSignup();
});
