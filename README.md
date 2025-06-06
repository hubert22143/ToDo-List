
You can preview the site there: https://hubert22143.github.io/ToDo-List/


ToDo List
This is a simple task management app I built while working through The Odin Project curriculum. 
It's a single-page application (SPA) where users can add, update, and delete tasks, with data organized by project.

Features
- Create tasks with a title, description, due date, and priority

- Organize tasks into different projects

- Edit and delete tasks or entire projects

- Mark tasks as complete

- Local storage support to persist tasks between sessions

Technologies:
JavaScript (ES6 modules)

HTML & CSS

Webpack

Project Structure
/src contains all the main modules:

index.js: App entry point, initializes the UI and loads existing tasks

task.js: Task factory function and task-related logic

project.js: Handles creating and storing projects

ui.js: Updates DOM elements, handles event listeners

storage.js: Reads from and writes to localStorage

How the Code Works
createTask(title, description, dueDate, priority)
A factory function that returns a task object with the above properties.

addTaskToProject(projectName, task)
Adds a new task to the specified project’s task array.

deleteTask(projectName, taskId)
Removes a task by ID from the specified project.

createProject(name)
Returns a project object with a name and empty task array.

saveToLocalStorage() and loadFromLocalStorage()
Handle data persistence using the browser's localStorage.

renderProjectList() and renderTaskList(project)
Update the visible project and task lists based on current app state.

Getting Started
Clone the repository:

git clone https://github.com/hubert22143/ToDo-List.git
Install dependencies and start the development server:

cd ToDo-List
npm install
npm start
Open the app in your browser at localhost:8080.

