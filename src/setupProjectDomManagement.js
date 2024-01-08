import projectManagerDom from "./projectManagerDom";
export default function setupProjectDomManagement() {
  const projectManagerInstance = new projectManagerDom();
  projectManagerInstance.handleProjectOpen();
  projectManagerInstance.handleButtonSubmit();
  projectManagerInstance.handleProjectCancel();
}