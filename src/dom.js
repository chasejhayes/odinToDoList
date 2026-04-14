

import { makeNewProject, projectArr } from "./code.js";

const container = document.querySelector("#container")

// DOM styling for main page
function makeHeader() {
    const header = document.createElement("div");
    header.id = "header";
    header.style.backgroundColor = "#660033"
    header.style.color = "#F5E9DA"
    header.textContent = "TO DO LIST";
    header.style.fontSize = "100px";
    header.style.alignContent = "center";
    header.style.paddingLeft = "25px"
    header.style.height = "25vh"
    container.appendChild(header);
}

function makeBody() {
    const body = document.createElement("div");
    body.id = "body";
    body.style.backgroundColor = "#F5E9DA";
    body.style.height = "75vh";
    body.style.display = "grid";
    body.style.gridTemplateColumns = "250px 3fr"
    container.appendChild(body);
}

function makeSideBar() {
    const sideBar = document.createElement("div");
    sideBar.id = "sideBar";
    sideBar.style.borderRight = "2px solid #660033"
    body.appendChild(sideBar)
}

function makeDisplay() {
    const display = document.createElement("div");
    display.id = "display";
    body.appendChild(display);
}

function makeNewProjectButton() {
    const projectButton = document.createElement("button");
    projectButton.classList.add("button");
    projectButton.textContent = "Create New Project";
  
    

    sideBar.appendChild(projectButton)
}


export function generateHomePage() {
    makeHeader();
    makeBody();
    makeSideBar();
    makeDisplay();
    makeNewProjectButton()

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