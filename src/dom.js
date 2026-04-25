

import { makeNewProject, projectArr, makeNewTask,} from "./code.js";

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
    return sideBar;
}

function makeDisplay() {
    const display = document.createElement("div");
    display.id = "display";
    body.appendChild(display);
    return display;
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
// end of functions that style home page





// selects the 'create new project' button 
// on click it opens a dialog (pop up window)

export function runNewFormCreation() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        document.getElementById('form_dialog').showModal()
    })

}

// assigns DOM elements to variables 
const form = document.querySelector("form")
const dialog = document.querySelector("#form_dialog")



function makeProjectSelection() {
    // select object from project array
    const newProject = projectArr.at(-1)
    // create a div on which to display project and assign a class
    const projectCard = document.createElement("div");
    projectCard.classList.add("project");
    // makes the DOM id equal to the generated id
    projectCard.id = newProject.id;
    // assigns the project DOM id value to a variable (?)
    const projectID = projectCard.id;

    // creates a header element and makes the text content that of the selected object title
    // appends the heading to the created div 
    const projectTitle = document.createElement("h1");
    projectTitle.textContent = newProject.title;
    projectCard.appendChild(projectTitle);

    // does the same but for the due date information (will probably delete)
    const projectDueDate = document.createElement("p");
    projectDueDate.textContent = newProject.dueDate;
    projectCard.appendChild(projectDueDate);

    // does the same for the the priority information (will probably delete)
    const projectPriority = document.createElement("p");
    projectPriority.textContent = newProject.priority;
    projectCard.appendChild(projectPriority);

    // add onClick event that runs the function "makeProjectDisplayPage"
    // passes the object's title as a parameter
    projectCard.addEventListener("click", () => {
        makeProjectDisplayPage(newProject.title, newProject.id)
       
    })


    // appends the projectCard div to the sidebar div
    sideBar.appendChild(projectCard)

    // returns the projectID(?)
    return projectID;
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
        makeNewProject(obj.title, obj.dueDate, obj.priority);
        dialog.close();
        form.reset();
        console.log(projectArr)

        makeProjectSelection()

    })

}


function makeProjectDisplayPage(title, id){
    display.textContent = "";
    const titleDiv = document.createElement("div");
    titleDiv.textContent = title;
    let buttonID = id;
    titleDiv.id = id
    display.appendChild(titleDiv);
    makeAddTaskButton(display, buttonID)
}

function makeAddTaskButton(display, id){
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add task";
    addTaskButton.id = id
    display.appendChild(addTaskButton);
    addTask(addTaskButton, id)
}




function addTask(element, id){
    let location = id;
    element.addEventListener("click", () => {
        let newTask = prompt("Enter a new task");
        console.log(projectArr)
        const proj = projectArr.map(object => {
        if (object.id == location) {
            object.arr.push(newTask)
        } else{
            return object
        }
    })
    console.log(projectArr[0])
    console.log(projectArr[1])
    return proj
  
    })
}


// For some reason the ID is changing when a task is added, map is the possibly the cause


// should be working directly with the object




// make individual functions for button that displays tasks/title/etc


// connect the dom id
// when clicking on the title card