import { ProjectManager } from "./projectManagement";
import { saveProjectsOnExit } from "./storageApi";

export function deleteThisProject(projectName) {
    const currentProjects = ProjectManager.projects;
    const getCurrentProject = currentProjects.find((project) => project.name === projectName);
    console.log(getCurrentProject.id)
    if (getCurrentProject) {
        ProjectManager.deleteProject(projectName);
        saveProjectsOnExit();
    }
}
