import { defaultTabBehaviour } from './handleDefaultTab';
import handleProjectsOutlook from './handleProjectsTab';
import showOriginalTodayContent from './handleTodayTab';
import createAndDisplayProject from './projectCreationHandler';
import {Project, ProjectManager} from './projectManagement';


const PROJECTS_KEY = "projects";

export function saveProjectsOnExit(){
    const projectsToSave = ProjectManager.projects.map(project => {
        return{
            id: project.id,
            name: project.name,
            tasks: project.tasks,
        }
    })
    window.localStorage.setItem(PROJECTS_KEY, JSON.stringify(projectsToSave));
}

export function loadProjectsOnEnter(){
    const savedProjects = JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [];
    ProjectManager.projects = savedProjects.map(savedProject => {
        const project = new Project(savedProject.name);
        project.id = savedProject.id;
        project.tasks = savedProject.tasks;
        createAndDisplayProject(project);
        return project;
    })
    return ProjectManager.projects;
}