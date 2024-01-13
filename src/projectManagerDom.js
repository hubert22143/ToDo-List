import {ProjectManager as ProjectManagement} from "./projectManagement";
import handleErrorMessage from "./errorHandler";
import {SuccessufullNotificationHandler} from "./successufullNotification";
import createAndDisplayProject from "./projectCreationHandler";
export default class ProjectManager {
  constructor() {
    this.createProjectImage = document.getElementById('CreateProject');
    this.createProjectSubmit = document.getElementById('CreateProjectSubmit');
    this.submitButtonProjectValue = document.getElementById('ProjectNameHolder');
    this.createProjectContainer = document.querySelector('.CreateProjectContainer');
    this.createProjectCancel = document.getElementById('CreateProjectCancel');
  }

  handleProjectOpen() {
    this.createProjectImage.addEventListener('click', () => {
      this.createProjectContainer.style.display = "flex";
    });
  }

  handleProjectCreate() {
    if(this.submitButtonProjectValue.value!==''){
      const containsNumbers = /\d/.test(this.submitButtonProjectValue.value);
      if (this.submitButtonProjectValue.value.length >= 3 && !containsNumbers) {
        const project = ProjectManagement.createProject(this.submitButtonProjectValue.value);
        if (project) {
          this.createProjectContainer.style.display = 'none';
          createAndDisplayProject(project);
          SuccessufullNotificationHandler();
        } else {
          handleErrorMessage();
        }
      } else {
        handleErrorMessage();
      }
    }
    }
  handleButtonSubmit() {
    this.createProjectSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleProjectCreate();
      ProjectManagement.showArray();
    });
  }

  handleProjectCancel() {
    this.createProjectCancel.addEventListener('click', () => {
      this.createProjectContainer.style.display = 'none';
    });
  }
}