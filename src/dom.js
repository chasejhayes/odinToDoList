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

// function collectFormData() {
//     let fd = new FormData(form);
//     let obj = Object.fromEntries(fd)
//     return obj;
// }

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
