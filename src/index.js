import setupProjectDomManagement from './setupProjectDomManagement'
import setupTaskDomManagement from './setupTaskDomManagement';
import defaultProject from './initializeDefaultProject';
import showOriginalTodayContent from './handleTodayTab';
document.addEventListener('DOMContentLoaded', () => {
setupProjectDomManagement();
setupTaskDomManagement();
defaultProject("Default Project");
});
showOriginalTodayContent();