import createAndDisplayProject from "./projectCreationHandler";
import { ProjectManager as projectManagement } from "./projectManagement";
import {defaultTaskValues} from "./TaskDomDataCatcher"
export default function defaultProject(value){
    if(value){
        const defaultProject = projectManagement.createProject(value);
        if(defaultProject){
            const defaultTask = defaultTaskValues();
            projectManagement.addTask(defaultProject,defaultTask)
            createAndDisplayProject(defaultProject);
        }
    }
}