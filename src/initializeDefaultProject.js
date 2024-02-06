import { ProjectManager } from "./projectManagement";
import { defaultTaskValues } from "./TaskDomDataCatcher";
import { saveProjectsOnExit, loadProjectsOnEnter } from "./storageApi";

export default function defaultProject(value) {
    const loadedProjects = loadProjectsOnEnter();
    const defaultProjectExists = loadedProjects.some(project => project.name === "Default Project");
    const defaultProject = ProjectManager.createProject(value);
    if (!defaultProjectExists && value) {
        console.log("Created default project:", defaultProject, ProjectManager.projects);
        const defaultTask = defaultTaskValues();
        ProjectManager.addTask(defaultProject, defaultTask);
        saveProjectsOnExit();
    }
}