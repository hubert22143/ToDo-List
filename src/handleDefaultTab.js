import { ProjectManager } from "./projectManagement";
import handleTaskTableCreate from "./domTaskAppend";
export function defaultTabBehaviour() {
        const tabElement = document.querySelectorAll('.default');
        tabElement.forEach((tab) => {
            tab.addEventListener('click', event => {
                let clickedTab = event.target;
                if (clickedTab.textContent === "Default Project") {
                    ifClickedDefaultTab();
                }
            });
        })
}
       export function ifClickedDefaultTab() {
        let actualVisibleProjects = ProjectManager.projects;
        let defaultProject = actualVisibleProjects.find(project => project.name === "Default Project");
        let defaultProjectTasks = defaultProject.tasks;
        clearCurrentContent();
        handleTaskTableCreate(defaultProjectTasks);
    }
     export function clearCurrentContent(){
        const todayTab = document.querySelector('.todayPage');
        todayTab.innerHTML = '';
    }