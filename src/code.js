
// class that creates an object
class Project{
    constructor(title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority
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
// creates a taskArr (?)
// returns projectArr while pushing the new project into the array, also returns the taskArr
export function makeNewProject(title, dueDate, priority){
    let project = new Project(title, dueDate, priority);
    project.id = crypto.randomUUID();
    let taskArr = [];
    return projectArr.push(project), taskArr
}

// function that uses the Task class to create a new task
// return the taskArr after pushing the new task to it
export function makeNewTask(title){
    let task = new Task(title);
    return taskArr.push(task)
}


// To do: go through each function and label

// making a new project should create an array
// question is how do you make that array unique
// did it in that library project, look there


// To do:

// when created, new project should appear as a clickable selection on the sidebar
// when clicked form details appear on display along with button that allows you to add tasks to the project
// hook up dialog form/button/array that updates the project
// check box to cross off individual tasks 
// css that makes there be a drop shadow when moused over
// Header should only shrink so far
