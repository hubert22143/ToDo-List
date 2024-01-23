import setupProjectDomManagement from './setupProjectDomManagement'
import setupTaskDomManagement from './setupTaskDomManagement';
import defaultProject from './initializeDefaultProject';
import showOriginalTodayContent from './handleTodayTab';
import displayTodayProjects from './createTodayTaskDisplay';
document.addEventListener('DOMContentLoaded', () => {
setupProjectDomManagement();
setupTaskDomManagement();
defaultProject("Default Project");
showOriginalTodayContent();
displayTodayProjects();
});