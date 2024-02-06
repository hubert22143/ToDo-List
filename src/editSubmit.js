export default function editSubmit(task, taskId) {
    const editSubmitButton = document.getElementById('editSubmit');
    editSubmitButton.addEventListener('click', () => {
        const updatedTitle = document.getElementById('editTitle').value;
        const updatedDescription = document.getElementById('editDescription').value;
        const updatedStartDate = document.getElementById('editStartDate').value;
        const updatedStartHour = document.getElementById('editStartHour').value;
        const updatedEndDate = document.getElementById('editEndDate').value;
        const updatedEndHour = document.getElementById('editEndHour').value;
        const updatedPriority = document.getElementById('editPriority').value;

        if (task.taskId === taskId) {
            task.title = updatedTitle;
            task.description = updatedDescription;
            task.startDate = updatedStartDate;
            task.startHour = updatedStartHour;
            task.endDate = updatedEndDate;
            task.endHour = updatedEndHour;
            task.priority = updatedPriority;
        }

        document.querySelector('.showEditContainer').style.display = 'none';
    });
}