
// class that creates an object
class Project{
    constructor(title){
        this.title = title;
    }
}

// class that creates a task
class Task{
    constructor(title){
        this.title = title
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


// (!) probably delete as askArr no longer exists and it still works
// function that uses the Task class to create a new task
// return the taskArr after pushing the new task to it
export function makeNewTask(title){
    let task = new Task(title);
    return taskArr.push(task)
}

















// To do:
// when created, new project should appear as a clickable selection on the sidebar
// when clicked form details appear on display along with button that allows you to add tasks to the project
// hook up dialog form/button/array that updates the project
// check box to cross off individual tasks 
// css that makes there be a drop shadow when moused over
// Header should only shrink so far
