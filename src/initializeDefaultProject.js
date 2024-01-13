import createAndDisplayProject from "./projectCreationHandler";
import { ProjectManager as projectManagement } from "./projectManagement";

export default function defaultProject(value){
    if(value){
        const defaultProject = projectManagement.createProject(value);
        if(defaultProject){
            createAndDisplayProject(defaultProject);
        }
    }
}