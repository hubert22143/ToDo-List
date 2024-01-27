import displayTodayProjects from "./createTodayTaskDisplay";
const parentContainer = document.querySelector('.todayPage');

export function refreshTodayProjects(){
    parentContainer.addEventListener('click', (event) => {
        const target = event.target;
        console.log("hehe");
        if (target.id === 'refreshButton') {
            displayTodayProjects();
        }
    });
}