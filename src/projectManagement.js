import generateUniqueId from "./generateUniqueId";
export class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
        this.id = generateUniqueId();
    }
}
export class ProjectManager{
    static projects = [];
    static createProject(name){
        const newProject = new Project(name);
        ProjectManager.projects.push(newProject);
        return newProject;
    }
    static deleteProject(name) {
        const index = ProjectManager.projects.findIndex(project => project.name === name);
        if (index !== -1) {
            ProjectManager.projects.splice(index, 1);
        }
    }
    static showArray(){
        console.log(ProjectManager.projects);
    }
    static addTask(project,task){
        project.tasks.push(task);
    }
}