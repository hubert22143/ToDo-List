import { appendSvgToCheckbox } from "./checkboxSvgFunctionality";
import { removeDiv } from "./checkboxSvgFunctionality";
let originalContent = {};

export default function checkboxFunction() {
    let checkboxes = document.querySelectorAll('.checkProject');

    if (checkboxes) {
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                const taskContainer = checkbox.closest('.myDynamicallyCreatedProject');
                const taskId = taskContainer.getAttribute('id');
                if (checkbox.checked) {
                    console.log("The checkbox has been checked now");
                    manipulateCheckboxDom(taskContainer);
                    appendSvgToCheckbox(taskContainer);
                } else {
                    console.log("The checkbox has been unchecked");
                    removeDiv(taskContainer);
                    restoreOriginalContent(taskContainer, taskId);
                }
            });
        });
    }
}

function manipulateCheckboxDom(taskContainer) {
    const taskId = taskContainer.getAttribute('id');
    originalContent[taskId] = {
        title: taskContainer.querySelector('.tittleOutput').textContent,
        hourOutput: taskContainer.querySelector('.hourOutput').textContent,
        projectAdherence: taskContainer.querySelector('.adherenceToProject').textContent,
    };

    let titleContent = taskContainer.querySelector('.tittleOutput');
    let hourOutput = taskContainer.querySelector('.hourOutput');
    let projectAdherence = taskContainer.querySelector('.adherenceToProject');

    titleContent.textContent = '';
    hourOutput.textContent = '';
    projectAdherence.textContent = '';
}

function restoreOriginalContent(taskContainer, taskId) {
    const originalContentForTask = originalContent[taskId];

    taskContainer.querySelector('.tittleOutput').textContent = originalContentForTask.title;
    taskContainer.querySelector('.hourOutput').textContent = originalContentForTask.hourOutput;
    taskContainer.querySelector('.adherenceToProject').textContent = originalContentForTask.projectAdherence;
}