import { SuccessufullNotificationHandler, forceHideSuccessNotification} from "./successufullNotification";
import { getInputValues } from "./TaskDomDataCatcher";
import { ifClickedDefaultTab } from "./handleDefaultTab";
import handleProjectsOutlook from "./handleProjectsTab";
import displayTodayProjects from "./createTodayTaskDisplay";
export default class TaskManager {
  constructor() {
    this.createTaskImage = document.getElementById('createTask');
    this.createTaskSubmit = document.getElementById('CreateTaskSubmit');
    this.submitButtonTaskValue = document.getElementById('TaskNameHolder');
    this.createTaskContainer = document.querySelector('.CreateTaskContainer');
    this.createTaskCancel = document.getElementById('CreateTaskCancel');
    this.defaultProjectName = "Default Project";
    this.availableProjectsSelect = document.getElementById('availableProjects');
  }

  handleTaskOpen() {
    this.createTaskImage.addEventListener('click', () => {
      this.createTaskContainer.style.display = "flex";
      forceHideSuccessNotification();
    });
  }

  taskButtonSubmit() {
    this.createTaskSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(this.submitButtonTaskValue.value);
      this.createTaskContainer.style.display = 'none';
      const inputValues = new getInputValues();
      inputValues.assignValuesToProject()
      SuccessufullNotificationHandler();
      if(this.defaultProjectName === this.availableProjectsSelect.value){
        ifClickedDefaultTab();
      }else{
        handleProjectsOutlook();  
      }
      displayTodayProjects();
    });
  }

  handleTaskCancel() {
    this.createTaskCancel.addEventListener('click', () => {
      this.createTaskContainer.style.display = 'none';
    });
  }
}