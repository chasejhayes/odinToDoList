import { makeNewProject } from "./code.js";

export function makeNewProjectButton(){
    const container = document.querySelector("#container")

    const projectButton = document.createElement("button");
    projectButton.classList.add("button");
    projectButton.textContent = "Create New Project";

    container.appendChild(projectButton)
}

export function runNewFormCreation(){
    const button = document.querySelector("button");
    button.addEventListener("click", ()=> {
        makeNewProject()
    })

}