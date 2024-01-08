import ProjectManager from './projectManagement';
import setupProjectDomManagement from './setupProjectDomManagement'
import setupTaskDomManagement from './setupTaskDomManagement';
document.addEventListener('DOMContentLoaded', () => {
setupProjectDomManagement();
setupTaskDomManagement();
});


const project = ProjectManager.createProject("Dog");
console.log(project)
const project2 = ProjectManager.createProject("Cat");
console.log(project2);
console.log(ProjectManager.showArray());
ProjectManager.deleteProject("Cat");
console.log(ProjectManager.showArray());