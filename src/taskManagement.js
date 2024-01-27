import generateUniqueId from "./generateUniqueId";

export default class task{
    constructor(title,description,startDate,startHour,endDate,endHour,priority,checklist){
        this.title = title;
        this.description = description;
        this.startDate = startDate
        this.startHour = startHour
        this.endDate = endDate
        this.endHour = endHour
        this.priority = priority;
        this.taskId = generateUniqueId();
    }
    static createTask(title,description,startDate,startHour,endDate,endHour,priority,taskId){
        return new task(title,description,startDate,startHour,endDate,endHour,priority,taskId);
    }
}