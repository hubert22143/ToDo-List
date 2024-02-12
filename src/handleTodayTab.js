import checkboxFunction from "./checkboxFunction";
import task from "./taskManagement";

export default function showOriginalTodayContent() {
    let storedOriginalContent = document.querySelector('.todayPage').innerHTML;
    const todayTab = document.querySelector('.dailyTasks');

    todayTab.addEventListener('click', () => {
        document.querySelector('.todayPage').innerHTML = storedOriginalContent;
        checkboxFunction();

        const everyCreatedDynamicallyProject = document.querySelectorAll('.myDynamicallyCreatedProject');

        everyCreatedDynamicallyProject.forEach((project) => {
            const projectId = project.id;
            if (!matchTheId(projectId)) {
                console.log("No jest prawda bo cos takiego sie znajduje co nie");
                project.remove();
            }
        });
    });

    function matchTheId(id) {
        return !!task.allTasks.some((task) => task.id === id);
    }
}