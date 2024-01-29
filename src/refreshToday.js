import displayTodayProjects from "./createTodayTaskDisplay";
const parentContainer = document.querySelector('.todayPage');

export function refreshTodayProjects(){
    parentContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.id === 'refreshButton') {
            displayTodayProjects();
        }
    });
}