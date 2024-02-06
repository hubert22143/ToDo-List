import { ProjectManager } from "./projectManagement";
import editSubmit from "./editSubmit";
export default function handleEditButtonClick(taskId) {
    const projectHolder = ProjectManager.projects;
    console.log(taskId);
    for (const currentTask of projectHolder) {
        const task = currentTask.tasks.find(task => task.taskId === taskId);
        if (task) {
            populateEditContainer(task);
            editSubmit(task,taskId);
        }
    }
}

function populateEditContainer(task) {
    document.getElementById('editTitle').value = task.title;
    document.getElementById('editDescription').value = task.description || '';
    document.getElementById('editStartDate').value = task.startDate || '';
    document.getElementById('editStartHour').value = task.startHour || '';
    document.getElementById('editEndDate').value = task.endDate || '';
    document.getElementById('editEndHour').value = task.endHour || '';

    const prioritySelect = document.getElementById('editPriority');
    prioritySelect.innerHTML = '';

    const priorities = ["Small", "Medium", "High"];

    priorities.forEach(priorityOption => {
        const option = document.createElement('option');
        option.value = priorityOption;
        option.text = priorityOption;
        prioritySelect.appendChild(option);
    });
}