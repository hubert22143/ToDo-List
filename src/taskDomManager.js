import { SuccessufullNotificationHandler, forceHideSuccessNotification} from "./successufullNotification";

export default class TaskManager {
  constructor() {
    this.createTaskImage = document.getElementById('createTask');
    this.createTaskSubmit = document.getElementById('CreateTaskSubmit');
    this.submitButtonTaskValue = document.getElementById('TaskNameHolder');
    this.createTaskContainer = document.querySelector('.CreateTaskContainer');
    this.createTaskCancel = document.getElementById('CreateTaskCancel');
  }

  handleTaskOpen() {
    this.createTaskImage.addEventListener('click', () => {
      this.createTaskContainer.style.display = "flex";
      forceHideSuccessNotification();
      console.log("click");
    });
  }

  taskButtonSubmit() {
    this.createTaskSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(this.submitButtonTaskValue.value);
      this.createTaskContainer.style.display = 'none';
      SuccessufullNotificationHandler();
    });
  }

  handleTaskCancel() {
    this.createTaskCancel.addEventListener('click', () => {
      this.createTaskContainer.style.display = 'none';
    });
  }
}