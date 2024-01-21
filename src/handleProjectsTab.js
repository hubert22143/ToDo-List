    import { clearCurrentContent } from "./handleDefaultTab";
    import { ProjectManager } from "./projectManagement";
    import handleTaskTableCreate from "./domTaskAppend";
    import { ifClickedDefaultTab } from "./handleDefaultTab";
    export default function handleProjectsOutlook(){
        const everyProject = document.querySelectorAll('.default');
        everyProject.forEach((project) => {
            const projectName = project.querySelector('span').textContent;
            console.log(projectName);
            clearCurrentContent();
            findActualProjectName(projectName);
            project.addEventListener('click', () => {
                clearCurrentContent();
                findActualProjectName(projectName);
            })
        } )
    }
    function findActualProjectName(projectName){
        if(projectName !== "Default Project"){
            let everyProjectAvailable = ProjectManager.projects;
            console.log(everyProjectAvailable);
            let currentProject = everyProjectAvailable.find(project => project.name === projectName);
            if (currentProject){
                let currentProjectTask = currentProject.tasks;

                handleTaskTableCreate(currentProjectTask)
            }else{
                console.log("Current project not found");
            }
        }else{
            ifClickedDefaultTab()
        }

    }
