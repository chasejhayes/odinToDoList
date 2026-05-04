// import { makeNewProject, projectArr } from "./code.js";

// Misc.
// Why can't I call this in getProject below?
// function newGetProject(){
//     const newProject = projectArr.at(-1)
//     const projectCard = document.createElement("div");
//     projectCard.classList.add("project");
//     projectCard.id = newProject.id;
//     return newProject, projectCard

// }





// Make project functions
class Project {
    constructor(title) {
        this.title = title;
    }
}

let projectArr = [];

function makeNewProject(title) {
    let project = new Project(title);
    project.id = crypto.randomUUID();
    project.arr = [];
    return projectArr.push(project)
}

const projectForm = document.getElementById("project_form")
const dialog = document.querySelector("#project_dialog")

export function runNewProjectFormCreation() {
    const button = document.getElementById("projectButton")
    button.addEventListener("click", () => {
        document.getElementById('project_dialog').showModal()
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
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let fd = new FormData(projectForm);
        let obj = Object.fromEntries(fd)
        makeNewProject(obj.title);
        dialog.close();
        projectForm.reset();
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
    addNewTask(id)
}

function runMakeProjectDisplayPage(project, div) {
    div.addEventListener("click", () => {
        makeProjectDisplayPage(project.title, project.id)
    })
}

function createProjectHeader(project, div) {
    const projectTitle = document.createElement("h1");
    projectTitle.textContent = project.title;
    div.appendChild(projectTitle)
}


function getProject() {
    const newProject = projectArr.at(-1)
    const projectCard = document.createElement("div");
    projectCard.classList.add("project");
    projectCard.id = newProject.id;
    createProjectHeader(newProject, projectCard)
    runMakeProjectDisplayPage(newProject, projectCard)

    sideBar.appendChild(projectCard)
}






// Task functions


function runNewTaskFormCreation(button) {
    button.addEventListener("click", () => {
        document.getElementById("add_task").showModal()
    })
}




function makeAddTaskButton(display, id) {
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add task";
    addTaskButton.id = id
    addTaskButton.classList.add("taskButton")
    display.appendChild(addTaskButton);
    runNewTaskFormCreation(addTaskButton, id)
    // addNewTask(id)
    // addTask(addTaskButton, id)
}

const taskForm = document.getElementById("task_form")
const taskDialog = document.getElementById("add_task")

function addNewTask(id) {
    const location = id;
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let fd = new FormData(taskForm)
        let obj = Object.fromEntries(fd)
        console.log(location)
        const proj = projectArr.map(object => {
            if (object.id == location) {
                object.arr.push(obj)
            } else {
                return object
            }
        })
        taskDialog.close();
        taskForm.reset();
        return proj

    })
}

// old
// function addTask(element, id) {
//     let location = id;
//     element.addEventListener("click", () => {
//         let newTask = prompt("Enter a new task");
//         console.log(projectArr)
//         const proj = projectArr.map(object => {
//             if (object.id == location) {
//                 object.arr.push(newTask)
//             } else {
//                 return object
//             }
//         })
//         console.log(projectArr[0])
//         console.log(projectArr[1])
//         return proj

//     })
// }


// To do:

// Next:
// make the add task a dialog, not an alert
// subtask: fix arr bug


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
// figure out best practice for modules (answer: generate tasks, generate projects, generate page stylings)
// set up local storage 
// use the dom to create the dialogs/delete code from template HTML






