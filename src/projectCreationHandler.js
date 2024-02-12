import {ProjectManager} from "./projectManagement";
import projectClickHandler from "./projectClickHandler";
import { deleteThisProject } from "./deleteProject";
export default function createAndDisplayProject(projectName){
    if(projectName){
        if(!checkIfProjectExistsInDom(projectName.id)){
            displayProjectInDom(projectName)
            updateProjectOptions();
        }
        updateProjectOptions();
    }
}
    function checkIfProjectExistsInDom(projectId){
        const existingProjectElement = document.querySelector(`[data-project-id="${projectId}"]`);
        return !!existingProjectElement

    }
    function displayProjectInDom(project) {
        const listOfProjectsContainer = document.querySelector('.listOfProjects');
        const projectDivHolder = document.createElement('div');
        projectDivHolder.setAttribute('data-project-id', project.id);
        projectDivHolder.classList.add("default");

        const firstDiv = document.createElement('div');
        firstDiv.classList.add("project-info");

        const img = document.createElement('img');
        img.src = "images/hashtag.png";
        img.classList.add("stylizedImg");
        
        const span = document.createElement("span");
        span.textContent = project.name;
    
        firstDiv.appendChild(img);
        firstDiv.appendChild(span);
    
        const secondDiv = document.createElement('div');
        secondDiv.classList.add("button-space");
    
        const buttonSpace = document.createElement("span");
        buttonSpace.classList.add("stylizedRemover");
    
        buttonSpace.addEventListener('click', () => {
            console.log(span.textContent)
            deleteThisProject(span.textContent);
            projectDivHolder.remove();
        })
        const buttonRemove = document.createElement("img");
        buttonRemove.classList.add("stylizedImg");
        buttonRemove.src = "images/trash.png";

        buttonSpace.appendChild(buttonRemove);
        secondDiv.appendChild(buttonSpace);
    
        projectDivHolder.style.display = "flex";
        projectDivHolder.style.justifyContent = "space-between";
    
        projectDivHolder.appendChild(firstDiv);
        projectDivHolder.appendChild(secondDiv);
    
        listOfProjectsContainer.appendChild(projectDivHolder);
    
        projectClickHandler(projectDivHolder);
    }
    function updateProjectOptions() {
        const availableProjectsSelect = document.getElementById('availableProjects');
        availableProjectsSelect.innerHTML = "";
    
        const uniqueProjectNames = new Set();
    
        ProjectManager.projects.forEach(project => {
            uniqueProjectNames.add(project.name);
        });
    
        uniqueProjectNames.forEach(projectName => {
            const option = document.createElement('option');
            option.value = projectName;
            option.textContent = projectName;
            availableProjectsSelect.appendChild(option);
        });
    }