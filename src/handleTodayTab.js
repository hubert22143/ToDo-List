let storedOriginalContent = document.querySelector('.todayPage').innerHTML;

export default function showOriginalTodayContent() {
    const todayTab = document.querySelector('.dailyTasks');
    todayTab.addEventListener('click', () => {
        document.querySelector('.todayPage').innerHTML = storedOriginalContent;
    });
}