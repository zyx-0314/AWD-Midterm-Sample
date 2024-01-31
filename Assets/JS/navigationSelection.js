const menuContainer = document.getElementById("_menuContainer");
const displayContainer = document.getElementById("_displayContainer");

const mainButtonsList = ["Our Fleet", "GearGuys", "Gear Shop", "Spaces", "Experience", "Experience", "Stories"];

const subMainButtonsList = ["Support Services", "Our Company"];

function CreateButtons(container, namesDictionay, classList = [], idList = [], hrefList = []) {
    for (let i = 0; i < namesDictionay.length; i++) {
        let button = document.createElement("li");
        let link = document.createElement("a");
        link.innerHTML = namesDictionay[i];

        if (classList.length) {
            for (let j = 0; j < classList.length; j++) {
                link.classList.add(classList[j]);
            }
        }

        if (idList.length) {
            for (let j = 0; j < idList.length; j++) {
                link.setAttribute("id", idList[j]);
            }
        }

        if (hrefList.length) {
            for (let j = 0; j < hrefList.length; j++) {
                link.setAttribute("href", hrefList[j]);
            }
        } else {
            link.setAttribute("href", "#");
        }
        link.addEventListener("mouseenter", () => {
            ChangeDisplay(namesDictionay[i]);
        });
        link.addEventListener("mouseleave", () => {
            ChangeDisplay(namesDictionay[i]);
        });
        button.appendChild(link);
        container.appendChild(button);
    }
}

function Separator(container) {
    let separator = document.createElement("hr");
    let space = document.createElement("br");
    container.appendChild(space);
    container.appendChild(separator);
}

function ChangeDisplay(style) {
    let variableName = style.replace(/\s+/g, "");
    variableName = variableName.charAt(0).toLowerCase() + variableName.slice(1);
    displayContainer.className = "";
    displayContainer.classList.add("displayContainer");
    displayContainer.classList.add(variableName);
}

CreateButtons(menuContainer, mainButtonsList, ["underlineEffect"], ["_selectionButton"]);
Separator(menuContainer);
CreateButtons(menuContainer, subMainButtonsList, ["underlineEffect", "sub"]);
Separator(menuContainer);
CreateButtons(menuContainer, ["Sign In"], ["underlineEffect", "sub"]);
