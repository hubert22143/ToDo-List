export default function generateTodayTaskTable(task) {
    let parentContainer = document.querySelector('.todayPage');

    let childContainer = document.createElement('div');
    childContainer.classList.add('myProjects');


    let hrElement = document.createElement('hr');

    let projectContainer = document.createElement('div');
    projectContainer.classList.add('dynamicallyCreatedProject1');

    let checkBoxHolder = document.createElement('div');
    checkBoxHolder.classList.add('checkBoxStylize');
    let checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.classList.add('checkProject');

    checkBoxHolder.appendChild(checkboxElement)

    let lineSeperator = document.createElement('div');
    lineSeperator.classList.add('orangeLineSeperator');

    let titleOutputElement = document.createElement('div');
    titleOutputElement.classList.add('seperatedTittleOutput');
    let titleTextElement = document.createElement('div');
    titleTextElement.classList.add('tittleOutput');
    titleTextElement.textContent = `${task.title}`;
    let hourOutputElement = document.createElement('div');
    hourOutputElement.classList.add('hourOutput');
    hourOutputElement.textContent = `Your task start at ${task.startHour} ${task.startDate}, and end at ${task.endHour} ${task.endDate} `;
    titleOutputElement.appendChild(titleTextElement);
    titleOutputElement.appendChild(hourOutputElement);

    let projectOutputElement = document.createElement('div');
    projectOutputElement.classList.add('seperatedProjectOutput');
    let adherenceToProjectElement = document.createElement('b');
    adherenceToProjectElement.classList.add('adherenceToProject');
    adherenceToProjectElement.textContent = `${task.title}`;
    projectOutputElement.appendChild(adherenceToProjectElement);

    projectContainer.appendChild(checkBoxHolder);
    projectContainer.appendChild(lineSeperator);
    projectContainer.appendChild(titleOutputElement);
    projectContainer.appendChild(projectOutputElement);

    childContainer.appendChild(hrElement);
    childContainer.appendChild(projectContainer);


    parentContainer.appendChild(childContainer);
}
