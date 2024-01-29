export function appendSvgToCheckbox(taskContainer) {
    let parentContainer = taskContainer.querySelector('.seperatedProjectOutput');
    if (parentContainer) {
        let childContainer = document.createElement('div');
        childContainer.classList.add("CreatedAutomaticallyCheckbox");
        childContainer.style.display = 'flex';
        childContainer.style.flexDirection = 'column'; 
       
        let trashContainer = document.createElement('img');
        trashContainer.src = "images/trash.png";
        trashContainer.classList.add("stylizedImg");
        trashContainer.id = 'trashContainer';
        trashContainer.style.marginBottom = '10px';
        let editContainer = document.createElement('img');
        editContainer.src = "images/edit.png";
        editContainer.classList.add("stylizedImg");
        editContainer.id = 'editContainer';
        editContainer.style.marginBottom = '10px';
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