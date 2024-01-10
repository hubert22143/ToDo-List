export default class task{
    constructor(title,description,startDate,startHour,endDate,endHour,priority,checklist){
        this.title = title;
        this.description = description;
        this.startDate = startDate
        this.startHour = startHour
        this.endDate = endDate
        this.endHour = endHour
        this.priority = priority;
    }
    static createTask(title,description,startDate,startHour,endDate,endHour,priority){
        return new task(title,description,startDate,startHour,endDate,endHour,priority);
    }
}