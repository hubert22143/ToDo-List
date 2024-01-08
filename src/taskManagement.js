export default class task{
    constructor(title,description,dueDate,priority,checklist){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority;
        this.checklist = checklist;
    }
    static createTask(title,description,dueDate,priority,checklist){
        return new task(title, description, dueDate, priority,checklist);
    }
}