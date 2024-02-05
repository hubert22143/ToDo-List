import editSubmit from "./editSubmit";
import { ProjectManager } from "./projectManagement";
export default function handleEditButtonClick(projectId) {
    const projectHolder = ProjectManager.projects;

    for (const project of projectHolder) {
        const task = project.tasks.find(task => task.taskId === projectId);
        if (task) {
            populateEditContainer(task);
            break;
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
    editSubmit(task);
}