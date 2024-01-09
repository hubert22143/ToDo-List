import ProjectManager from "./projectManagement";

export default function createAndDisplayProject(projectName){
    const newProject = ProjectManager.createProject(projectName);
    if(newProject){
        displayProjectInDom(projectName)
        updateProjectOptions();
    }else{

    }
}
    function displayProjectInDom(project){
        const listOfProjectsContainer = document.querySelector('.listOfProjects');
        const projectDivHolder = document.createElement('div');
        projectDivHolder.classList.add("default");
        const img = document.createElement('img');
        img.src = "images/hashtag.png";
        img.classList.add("stylizedImg");
        const span = document.createElement("span");
        span.textContent = project;
        projectDivHolder.appendChild(img);
        projectDivHolder.appendChild(span);
        listOfProjectsContainer.appendChild(projectDivHolder);
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