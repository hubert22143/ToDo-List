import project from './projectManagement';

const firstProject = new project('Sample project');

firstProject.addTask("Your duty is to work hard!")
firstProject.addTask("Fight for your country! It was written 1/4/2024");

console.log(firstProject);