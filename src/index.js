import ProjectManager from './projectManagement';
import taskManagement from './taskManagement';
import domProjectHandler from './projectDomHandler';
import taskProjectHandler from './taskDomHandler';
document.addEventListener('DOMContentLoaded', () => {
domProjectHandler();
taskProjectHandler();
});


const project = ProjectManager.createProject("Dog");
console.log(project)
const project2 = ProjectManager.createProject("Cat");
console.log(project2);
console.log(ProjectManager.showArray());
ProjectManager.deleteProject("Cat");
console.log(ProjectManager.showArray());