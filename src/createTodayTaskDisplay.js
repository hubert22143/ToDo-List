import { ProjectManager } from "./projectManagement";
import generateTodayTaskTable from "./generateTodayTaskDisplay";
import showOriginalTodayContent from "./handleTodayTab";
import checkboxFunction from "./checkboxFunction";

export default function displayTodayProjects() {
    let projectHolder = ProjectManager.projects;

    projectHolder.forEach((project) => {
        let projectTasks = project.tasks;

        if (projectTasks.length > 0) {
            let hasEndDate = projectTasks.some((task) => task.endDate !== undefined);

            if (hasEndDate) {
                projectTasks.forEach((task) => {
                    let taskTitle = task.title;
                    let taskStartDate = task.startDate;
                    let taskStartHour = task.startHour;
                    let taskEndHour = task.endHour;
                    let taskEndDate = task.endDate;
                    let projectTitle = project.name;
                    let projectId = task.taskId;
                    if(!isElementInDOM(projectId)){
                        generateTodayTaskTable(taskTitle,taskStartHour,taskStartDate,taskEndHour,taskEndDate,projectTitle,projectId)
                        checkboxFunction();
                    }
                    showOriginalTodayContent();
                });
            } else {
                console.log("It doesn't have an end date, nothing happens");
            }
        }
    });
    function isElementInDOM(id) {
        return !!document.getElementById(id);
    }
}