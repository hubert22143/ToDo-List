import { ProjectManager } from "./projectManagement";
import generateTodayTaskTable from "./generateTodayTaskDisplay";
import showOriginalTodayContent from "./handleTodayTab";
import checkboxFunction from "./checkboxFunction";

export default function displayTodayProjects() {
    let projectHolder = ProjectManager.projects;

    projectHolder.forEach((project) => {
        // Check if the project still exists in the array
        if (!ProjectManager.projects.some(existingProject => existingProject.name === project.name)) {
            console.log(`Project ${project.name} does not exist. Skipping...`);
            return;
        }

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

                    if (!isElementInDOM(projectId)) {
                        generateTodayTaskTable(taskTitle, taskStartHour, taskStartDate, taskEndHour, taskEndDate, projectTitle, projectId);
                        checkboxFunction();
                    }
                    showOriginalTodayContent();
                });
            }
        }
    });

    function isElementInDOM(id) {
        return !!document.getElementById(id);
    }
}