import ProjectManager from "./projectManagement";
import handleErrorMessage from "./errorHandler";
export default function setupProjectDomManagement(){
    const createProjectImage = document.getElementById('CreateProject');
    const createProjectSubmit = document.getElementById('CreateProjectSubmit');
    const submitButtonProjectValue = document.getElementById('ProjectNameHolder');
    const createProjectContainer = document.querySelector('.CreateProjectContainer');
    const createProjectCancel = document.getElementById('CreateProjectCancel');
    function handleProjectOpen(){
    createProjectImage.addEventListener('click', () =>{
        createProjectContainer.style.display = "flex";
    })
    }
    function handleProjectCreate(value) {
        const containsNumbers = /\d/.test(value);
        if (value.length >= 3 && !containsNumbers) {
            const project = ProjectManager.createProject(value);
            if (project) {
                createProjectContainer.style.display = 'none';
                console.log(project);
            } else {
                handleErrorMessage();
            }
        } else {
            handleErrorMessage();
        }
    }
    function projectButtonSubmit() {
        createProjectSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            handleProjectCreate(submitButtonProjectValue.value);
        });
    }
    function handleProjectCancel() {
        createProjectCancel.addEventListener('click', () => {
            createProjectContainer.style.display = 'none';
        });
    }
    handleProjectOpen();
    projectButtonSubmit();
    handleProjectCancel();
}