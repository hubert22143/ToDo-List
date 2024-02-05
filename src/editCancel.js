export default function editCancel(){
const cancelEdit = document.getElementById('editCancel');
const editContainer = document.querySelector('.showEditContainer');
cancelEdit.addEventListener('click', () => {
editContainer.style.display = 'none';
})
} 