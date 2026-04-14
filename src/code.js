
class Project{

    constructor(title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

export let projectArr = [];


export function makeNewProject(title, dueDate, priority){
    let project = new Project(title, dueDate, priority);
    return projectArr.push(project)
}



// To do:

// when created, new project should appear as a clickable selection on the sidebar
// when clicked form details appear on display along with button that allows you to add tasks to the project
// hook up dialog form/button/array that updates the project
// check box to cross off individual tasks 
