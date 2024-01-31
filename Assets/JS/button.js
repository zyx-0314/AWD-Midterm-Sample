const menuButton = document.querySelectorAll("#_menuButton");
const menu = document.getElementById("_menu");

menuButton.forEach((button) => {
    button.addEventListener("click", () => {
        toggleMenu();
    });
});

function toggleMenu() {
    menu.classList.toggle("active");
    menu.classList.toggle("inactive");
}

menu.addEventListener("animationend", () => {
    if (menu.classList.contains("inactive")) {
        menu.classList.add("hide");
    } else {
        menu.classList.remove("hide");
    }
});
