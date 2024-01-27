export default function generateTodayTaskTable(taskTitle,taskStartHour,taskStartDate,taskEndHour,taskEndDate,projectTitle,projectId) {
    let parentContainer = document.querySelector('.myProjects');
    if(parentContainer === null){
        console.log("Hehe");
    }
    console.log(parentContainer);
    let childContainer = document.createElement('div');
    childContainer.classList.add('myDynamicallyCreatedProject');
    childContainer.id = `${projectId}`;

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
    titleTextElement.textContent = `${taskTitle}`;
    let hourOutputElement = document.createElement('div');
    hourOutputElement.classList.add('hourOutput');
    hourOutputElement.textContent = `Your task start at ${taskStartHour} ${taskStartDate}, and end at ${taskEndHour} ${taskEndDate} `;
    titleOutputElement.appendChild(titleTextElement);
    titleOutputElement.appendChild(hourOutputElement);

    let projectOutputElement = document.createElement('div');
    projectOutputElement.classList.add('seperatedProjectOutput');
    let adherenceToProjectElement = document.createElement('b');
    adherenceToProjectElement.classList.add('adherenceToProject');
    adherenceToProjectElement.textContent = `${projectTitle}`;
    projectOutputElement.appendChild(adherenceToProjectElement);

    projectContainer.appendChild(checkBoxHolder);
    projectContainer.appendChild(lineSeperator);
    projectContainer.appendChild(titleOutputElement);
    projectContainer.appendChild(projectOutputElement);

    childContainer.appendChild(hrElement);
    childContainer.appendChild(projectContainer);


    parentContainer.appendChild(childContainer);
}
