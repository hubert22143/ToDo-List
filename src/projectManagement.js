class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task)
    }
}
export default  class ProjectManager{
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
}