import generateUniqueId from "./generateUniqueId";

export default class task {
    constructor(title, description, startDate, startHour, endDate, endHour, priority) {
        this.title = title;
        this.description = description.length > 20 ? description.slice(0, 20) : description;
        this.startDate = startDate;
        this.startHour = startHour;
        this.endDate = endDate;
        this.endHour = endHour;
        this.priority = priority;
        this.taskId = generateUniqueId();

        // Store the reference to this task
        task.allTasks.push(this);
    }

    static allTasks = [];

    static createTask(title, description, startDate, startHour, endDate, endHour, priority, taskId) {
        return new task(title, description, startDate, startHour, endDate, endHour, priority, taskId);
    }

    static removeTask(taskIdToRemove) {
        const indexToRemove = task.allTasks.findIndex(task => task.taskId === taskIdToRemove);
        if (indexToRemove !== -1) {
            task.allTasks.splice(indexToRemove, 1);
        } else {
            console.log("Task not found in the array");
        }
    }
}