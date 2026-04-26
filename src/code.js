
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
