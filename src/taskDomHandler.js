import { showSuccessufullNotification,forceHideSuccessufulNotification } from "./successufullNotification";

export default function setupTaskDomManagement(){
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