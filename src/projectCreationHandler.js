import {ProjectManager} from "./projectManagement";
import projectClickHandler from "./projectClickHandler";
export default function createAndDisplayProject(projectName){
    if(projectName){
        displayProjectInDom(projectName)
        updateProjectOptions();
    }else{

    }
}
    function displayProjectInDom(project){
        const listOfProjectsContainer = document.querySelector('.listOfProjects');
        const projectDivHolder = document.createElement('div');
        projectDivHolder.setAttribute('data-project-id',project.id)
        projectDivHolder.classList.add("default");
        const img = document.createElement('img');
        img.src = "images/hashtag.png";
        img.classList.add("stylizedImg");
        const span = document.createElement("span");
        span.textContent = project.name;
        projectDivHolder.appendChild(img);
        projectDivHolder.appendChild(span);
        listOfProjectsContainer.appendChild(projectDivHolder);
        projectClickHandler(projectDivHolder);
    }
    function updateProjectOptions() {
        const availableProjectsSelect = document.getElementById('availableProjects');
        availableProjectsSelect.innerHTML = ""; // Clear existing options
    
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