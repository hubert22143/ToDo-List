import task from "./taskManagement";
import { ProjectManager } from "./projectManagement";
import showOriginalTodayContent from "./handleTodayTab";
export default function editRemoveTask(taskId) {
    const taskContainer = document.getElementById(taskId);
    if (taskContainer) {
        taskContainer.remove();
        task.removeTask(taskId);
        ProjectManager.removeTask(taskId)
        showOriginalTodayContent();
    } else {
        console.log("Task container not found");
    }
}