export default function handleTaskTableCreate(task){
   
    const container = document.querySelector('.todayPage');
   
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID','Title','Description','startDate','startHour','endDate','endHour','taskPriority'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    })
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    const tasksArray = Array.isArray(task) ? task : [task];
    tasksArray.forEach((createdTask, index) => {
        const row = document.createElement('tr');
    
        const idCell = document.createElement('td');
        idCell.appendChild(document.createTextNode(index));
        row.appendChild(idCell);
    
        const titleCell = document.createElement('td');
        titleCell.appendChild(document.createTextNode(createdTask.title));
        row.appendChild(titleCell);
    
        const descriptionCell = document.createElement('td');
        descriptionCell.appendChild(document.createTextNode(createdTask.description));
        row.appendChild(descriptionCell);
    
        const startDateCell = document.createElement('td');
        startDateCell.appendChild(document.createTextNode(createdTask.startDate));
        row.appendChild(startDateCell);

        const startHourCell = document.createElement('td');
        startHourCell.appendChild(document.createTextNode(createdTask.startHour));
        row.appendChild(startHourCell);
    
        const endDateCell = document.createElement('td');
        endDateCell.appendChild(document.createTextNode(createdTask.endDate));
        row.appendChild(endDateCell);
    
        const endHourCell = document.createElement('td');
        endHourCell.appendChild(document.createTextNode(createdTask.endHour));
        row.appendChild(endHourCell);

        const taskPriorityCell = document.createElement('td');
        taskPriorityCell.appendChild(document.createTextNode(createdTask.priority));
        row.appendChild(taskPriorityCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    container.appendChild(table);

    table.style.display = 'none';
}