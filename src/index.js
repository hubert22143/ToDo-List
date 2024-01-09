import ProjectManager from './projectManagement';
import setupProjectDomManagement from './setupProjectDomManagement'
import setupTaskDomManagement from './setupTaskDomManagement';
import createAndDisplayProject from "./projectCreationHandler";
document.addEventListener('DOMContentLoaded', () => {
setupProjectDomManagement();
setupTaskDomManagement();
});
createAndDisplayProject("Default Project");