import handleEditButtonClick from "./editTask";
import editCancel from "./editCancel";
import editRemoveTask from "./editRemove";
export function appendSvgToCheckbox(taskContainer) {
    let parentContainer = taskContainer.querySelector('.seperatedProjectOutput');
    if (parentContainer && !parentContainer.querySelector('#trashContainer')) {
        let childContainer = document.createElement('div');
        childContainer.classList.add("CreatedAutomaticallyCheckbox");
        childContainer.style.display = 'flex';
        childContainer.style.flexDirection = 'column'; 
       
        let trashContainer = document.createElement('img');
        trashContainer.src = "images/trash.png";
        trashContainer.classList.add("stylizedImg");
        trashContainer.id = 'trashContainer';
        trashContainer.style.marginBottom = '10px';
        trashContainer.addEventListener('click', () => {
            const projectId = taskContainer.getAttribute('id');
            editRemoveTask(projectId);
        })
        let editContainer = document.createElement('img');
        editContainer.src = "images/edit.png";
        editContainer.classList.add("stylizedImg");
        editContainer.id = 'editContainer';
        editContainer.style.marginBottom = '10px';
        editContainer.addEventListener('click', (event) => {
            const projectId = taskContainer.getAttribute('id');
            console.log(projectId)
            handleEditButtonClick(projectId);
            document.querySelector('.showEditContainer').style.display = 'block';
            editCancel();
        });
        childContainer.appendChild(trashContainer);
        childContainer.appendChild(editContainer);
        parentContainer.appendChild(childContainer);
    } else {
        console.error("Parent container not found.");
    }
}

export function removeDiv(taskContainer) {
    let divToRemove = taskContainer.querySelector('.CreatedAutomaticallyCheckbox');
    if (divToRemove) {
        divToRemove.remove();
    }
}