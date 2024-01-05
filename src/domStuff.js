export function setupProjectDomManagement(){
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
    
    function projectButtonSubmit() {
    
        createProjectSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(submitButtonProjectValue.value);
                createProjectContainer.style.display = 'none';
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
export function setupTaskDomManagement(){
    const createTaskImage = document.getElementById('createTask');
    const createTaskSubmit = document.getElementById('CreateTaskSubmit');
    const submitButtonTaskValue = document.getElementById('TaskNameHolder');
    const createTaskContainer = document.querySelector('.CreateTaskContainer');
    const createTaskCancel = document.getElementById('CreateTaskCancel');
    function handleTaskOpen(){
    createTaskImage.addEventListener('click', () =>{
        createTaskContainer.style.display = "flex";
        console.log("click");
    })
    }
    
    function taskButtonSubmit() {
    
        createTaskSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(submitButtonTaskValue.value);
                createTaskContainer.style.display = 'none';
        });
    }
    function handleTaskCancel() {
        createTaskCancel.addEventListener('click', () => {
            createTaskContainer.style.display = 'none';
        });
    }
    handleTaskOpen();
    taskButtonSubmit();
    handleTaskCancel();
}