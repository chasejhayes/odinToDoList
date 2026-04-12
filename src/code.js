
class Project{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

export let projectArr = [];


export function makeNewProject(title, description, dueDate, priority){
    let project = new Project(title, description, dueDate, priority);
    return projectArr.push(project)
}








// To do:
// 
// 