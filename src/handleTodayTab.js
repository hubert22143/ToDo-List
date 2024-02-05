import checkboxFunction from "./checkboxFunction";

export default function showOriginalTodayContent() {
    let storedOriginalContent = document.querySelector('.todayPage').innerHTML;
    const todayTab = document.querySelector('.dailyTasks');
    todayTab.addEventListener('click', () => {
        document.querySelector('.todayPage').innerHTML = storedOriginalContent;
        checkboxFunction();
    });
}