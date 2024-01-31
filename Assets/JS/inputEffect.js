// Todo: Correct the input activation

const singInContainers = document.querySelector(".signInContainer");

const header = document.querySelector(".header");

const signInElements = document.querySelector(".signInElements");
const signUpElements = document.querySelector(".signUpElements");

const inputs = document.querySelectorAll("input");

const rememberme = document.getElementById("_rememberMeLabel");

const tabs = document.getElementById("_bottomCard");

tabs.querySelectorAll("div").forEach((element) => {
    element.addEventListener("click", () => {
        if (!element.classList.contains("active")) {
            tabs.querySelector(".active").classList.toggle("active");
            signInElements.classList.toggle("active");
            signUpElements.classList.toggle("active");
            element.classList.toggle("active");
            header.innerHTML = header.innerHTML === "Sign In" ? "Sign Up" : "Sign In";
            singInContainers.classList.toggle("signUp");
        }
    });
});

singInContainers.querySelectorAll("label").forEach((element) => {
    element.addEventListener("click", () => {
        const input = element.previousElementSibling;
        input.focus();
    });
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.length > 0) {
            input.classList.add("active");
        } else {
            input.classList.remove("active");
        }
    });
});

rememberme.addEventListener("click", () => {
    rememberme.previousElementSibling.checked = !rememberme.previousElementSibling.checked;
});
