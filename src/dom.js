import { makeNewProject, projectArr } from "./code.js";

const container = document.querySelector("#container")

export function makeNewProjectButton() {
    const projectButton = document.createElement("button");
    projectButton.classList.add("button");
    projectButton.textContent = "Create New Project";

    container.appendChild(projectButton)
}

export function runNewFormCreation() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        document.getElementById('form_dialog').showModal()
    })

}

const form = document.querySelector("form")
const dialog = document.querySelector("#form_dialog")


export function addNewProject() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let fd = new FormData(form);
        let obj = Object.fromEntries(fd)

        makeNewProject(obj.title, obj.description, obj.dueDate, obj.priority);
        dialog.close();
        form.reset();
        console.log(projectArr)

    })
}


// DOM styling for main page

export function generateHomePage() {
    // header
    const header = document.createElement("div");
    header.id = "header";
    header.style.backgroundColor = "#660033"
    header.color = "#F5E9DA"
    header.textContent = "TO DO LIST"
    header.style.height = "25vh"
    container.appendChild(header);

    // body
    const body = document.createElement("div");
    body.id = "body";
    body.style.backgroundColor = "#F5E9DA";
    body.style.height = "75vh";
    body.style.display = "grid";
    body.style.gridTemplateColumns = "1fr 3fr"
    container.appendChild(body);



    // sidebar
    const sideBar = document.createElement("div");
    sideBar.id = "sideBar";
    sideBar.style.borderRight = "1px solid black"
    body.appendChild(sideBar)

    // display
    const display = document.createElement("div");
    display.id = "display";
    body.appendChild(display);


}