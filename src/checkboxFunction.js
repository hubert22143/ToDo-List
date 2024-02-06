import { appendSvgToCheckbox } from "./checkboxSvgFunctionality";
import { removeDiv } from "./checkboxSvgFunctionality";
import displayTodayProjects from "./createTodayTaskDisplay";
export default function checkboxFunction() {
    let checkboxes = document.querySelectorAll('.checkProject');

    if (checkboxes) {
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                const taskContainer = checkbox.closest('.myDynamicallyCreatedProject');
                if (checkbox.checked) {
                    console.log("The checkbox has been checked now");
                    appendSvgToCheckbox(taskContainer);
                    hideTheContent(taskContainer)
                } else {
                    console.log("The checkbox has been unchecked");
                    removeDiv(taskContainer);
                    showTheContent(taskContainer)
                }
            });
        });
    }
}

function hideTheContent(taskContainer) {
    taskContainer.querySelector('.tittleOutput').style.display = 'none';
    taskContainer.querySelector('.hourOutput').style.display = 'none';
    taskContainer.querySelector('.adherenceToProject').style.display = 'none';
}

function showTheContent(taskContainer) {
    taskContainer.querySelector('.tittleOutput').style.display = 'flex';
    taskContainer.querySelector('.hourOutput').style.display = 'flex';
    taskContainer.querySelector('.adherenceToProject').style.display = 'flex';
}