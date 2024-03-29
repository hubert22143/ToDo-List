import task from "./taskManagement";
import {ProjectManager} from "./projectManagement";
export class getInputValues{
    constructor(){
        this.title = document.getElementById('TaskNameHolder').value;
        this.description = document.getElementById('TaskTextArea').value;
        this.startDate = document.getElementById('TaskDateStart').value;
        this.startHour = document.getElementById('TaskHourStart').value;
        this.endDate = document.getElementById('TaskDateEnd').value;
        this.endHour = document.getElementById('TaskHourEnd').value;
        this.taskPriority = document.getElementById('taskPriority').value;
        this.selectedProjectName = document.getElementById('availableProjects').value;
    }
    assignValuesToProject(){
     const createdTask = task.createTask(
        this.title,
        this.description,
        this.startDate,
        this.startHour,
        this.endDate,
        this.endHour,
        this.taskPriority
        );
        console.log(createdTask);
        const selectedProject = ProjectManager.projects.find(project => project.name === this.selectedProjectName);
        console.log(selectedProject);
        if(selectedProject){
            ProjectManager.addTask(selectedProject,createdTask);
            ProjectManager.showArray()
        }else{
            console.log("Some ugly error occured");
        }
    }
}
export function defaultTaskValues() {
    const defaultTitle = "Default Task";
    const defaultDescription = "Default description";
    const defaultStartDate = "2024-01-15";
    const defaultStartHour = "12:00";
    const defaultEndDate = "2024-01-16";
    const defaultEndHour = "14:00";
    const defaultPriority = "Medium";

    const defaultTask = task.createTask(
        defaultTitle,
        defaultDescription,
        defaultStartDate,
        defaultStartHour,
        defaultEndDate,
        defaultEndHour,
        defaultPriority
    );

    return defaultTask;
}