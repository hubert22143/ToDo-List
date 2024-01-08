import TaskManager from './taskDomManager'

export default function setupTaskDomManagement() {
  const taskManager = new TaskManager();
  taskManager.handleTaskOpen();
  taskManager.taskButtonSubmit();
  taskManager.handleTaskCancel();
}