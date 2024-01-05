import project from './projectManagement';
import {setupProjectDomManagement,setupTaskDomManagement} from './domStuff';
console.log("Hi");
document.addEventListener('DOMContentLoaded', () => {
setupProjectDomManagement();
setupTaskDomManagement();
});