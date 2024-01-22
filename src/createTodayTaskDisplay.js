import { ProjectManager } from "./projectManagement";
import generateTodayTaskTable from "./generateTodayTaskDisplay";
export default function displayTodayProjects() {
    let projectHolder = ProjectManager.projects;

    projectHolder.forEach((project) => {
        let projectTasks = project.tasks;
        if (projectTasks.length > 0) {
            let hasEndDate = projectTasks.some((task) => task.endDate !== undefined);
            if (hasEndDate) {
                projectTasks.forEach((task) => {
                    generateTodayTaskTable(task);
                })
            } else {
                console.log("It doesn't have an end date, nothing happens");
            }
        }
    });
}