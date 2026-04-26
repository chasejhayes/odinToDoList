
// class that creates an object
class Project{
    constructor(title){
        this.title = title;
    }
}


// an exported array that stores all created projects
export let projectArr = [];


// function that uses the Project class to create a new project
// assigns a unique ID to the project
// adds an empty array to each object
// returns projectArr while pushing the new project into the array
export function makeNewProject(title){
    let project = new Project(title);
    project.id = crypto.randomUUID();
    project.arr = [];
    return projectArr.push(project)
}







// To do:
// when created, new project should appear as a clickable selection on the sidebar
// when clicked form details appear on display along with button that allows you to add tasks to the project
// hook up dialog form/button/array that updates the project
// check box to cross off individual tasks 
// css that makes there be a drop shadow when moused over
// Header should only shrink so far
// Make dialog using JS DOM manipulation 



// UI:
// a main page that shows all projects and the create new project button
// each project has a new page that shows to dos, an option to show finished todos, a way to expand todos and edit them, checking them off to add them to finished, delete, group finished todos by date completed

// be aware of external libraries like date-fns for formatting and manipulating dates and times

// set up local storage 
