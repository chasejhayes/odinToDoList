import { makeNewProject, projectArr } from "./code.js";


// selects the 'create new project' button 
// on click it opens a dialog (pop up window)



const formContainer = document.getElementById("formContainer")

export function createProjectForm(){
    const dialog = document.createElement("dialog")
    dialog.id = "form_dialog"
    formContainer.appendChild(dialog)

    const formDiv = document.createElement("form")
    formDiv.action = ""
    formDiv.id = "form"
    formDiv.method = "dialog"
    dialog.appendChild(formDiv)

    const formElement = document.createElement("div")
    formElement.classList.add("form_element")
    formDiv.appendChild(formElement)

    const formLabel = document.createElement("label")
    formLabel.for="title"
    formLabel.textContent="Title: "
    formElement.appendChild(formLabel)

    const formInput = document.createElement("input")
    formInput.type = "text"
    formInput.id = "title"
    formInput.name = "title"
    formElement.appendChild(formInput)

    const formButton = document.createElement("button")
    formButton.type = "submit"
    formButton.value = "submit"
    formButton.textContent = "submit"
    formDiv.appendChild(formButton)
    
    
}


export function runNewFormCreation(func) {
    func;
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        document.getElementById('form_dialog').showModal()
    })

}

// assigns DOM elements to variables 
const form = document.querySelector("form")
const dialog = document.querySelector("#form_dialog")


// creats new project
function getProject() {
    const newProject = projectArr.at(-1)
    const projectCard = document.createElement("div");
    projectCard.classList.add("project");
    projectCard.id = newProject.id;

    createProjectHeader(newProject, projectCard)
    runMakeProjectDisplayPage(newProject, projectCard)

    sideBar.appendChild(projectCard)
}


function createProjectHeader(project, div){
    const projectTitle = document.createElement("h1");
    projectTitle.textContent = project.title;
   div.appendChild(projectTitle)
}


function runMakeProjectDisplayPage(project, div){
    div.addEventListener("click", () => {
        makeProjectDisplayPage(project.title, project.id)
    })
}
 


// uses the above variables 'form' and 'dialog'
// adds a submit event listener to the form element
// uses FormData method to assign key value pairs from the submitted form 
// assigns that data to fd
// fd is then converted into a true object using Object.fromEntries 
// the imported function makeNewProject creates a new project using the new object stored in obj
// the dialog is closed and the form is reset
// makeProjectSelection is then run 
export function addNewProject() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let fd = new FormData(form);
        let obj = Object.fromEntries(fd)
        makeNewProject(obj.title);
        dialog.close();
        form.reset();
        console.log(projectArr)

       getProject()

    })

}


function makeProjectDisplayPage(title, id) {
    display.textContent = "";
    const titleDiv = document.createElement("div");
    titleDiv.textContent = title;
    let buttonID = id;
    titleDiv.id = id
    display.appendChild(titleDiv);
    makeAddTaskButton(display, buttonID)
}

function makeAddTaskButton(display, id) {
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add task";
    addTaskButton.id = id
    display.appendChild(addTaskButton);
    addTask(addTaskButton, id)
}




function addTask(element, id) {
    let location = id;
    element.addEventListener("click", () => {
        let newTask = prompt("Enter a new task");
        console.log(projectArr)
        const proj = projectArr.map(object => {
            if (object.id == location) {
                object.arr.push(newTask)
            } else {
                return object
            }
        })
        console.log(projectArr[0])
        console.log(projectArr[1])
        return proj

    })
}


// To do:

// Next:
// make the add task a dialog, not an alert
// use the dom to create the dialogs/delete code from template HTML

// Tasks:
// format display for added tasks
// make checkbox that sends tasks to the bottom in a separate div
// make a delete task button
// make an edit task button
//make the finished todos expandable/shrinkable

// Projects:
// make an "archive project" button that sends the project to another array
// make a "delete project" that deletes the project
// make a button that replaces the projects with the archived projects sorted by and displaying the date completed (look at external libraries for dates and times)

// Misc:
// drop shadow for clicking on items/mousing over
// header shrinks too much
// figure out best practice for modules 
// set up local storage 






