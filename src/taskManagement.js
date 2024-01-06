export default class task{
    constructor(title,description,dueDate,priority,checklist,notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority;
        this.checklist = checklist;
        this.notes = notes;
    }
    static createTask(title,description,dueDate,priority,checklist,notes){
        return new task(title, description, dueDate, priority,checklist, notes);
    }
}