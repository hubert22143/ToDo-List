import { ProjectManager } from "./projectManagement";
import handleTaskTableCreate from "./domTaskAppend";

export function defaultTabBehaviour() {
    let clickedTab = event.target;
    if (clickedTab.textContent === "Default Project") {
        ifClickedDefaultTab();
    }

    function ifClickedDefaultTab() {
        const todayTab = document.querySelector('.todayPage');
        let actualVisibleProjects = ProjectManager.projects;
        let defaultProject = actualVisibleProjects.find(project => project.name === "Default Project");
        let defaultProjectTasks = defaultProject.tasks;
        console.log(defaultProjectTasks);
        handleTaskTableCreate(defaultProjectTasks);
    }
}