const errorBox = document.querySelector('.errorContainer');
const errorButton = document.getElementById('errorButtonStyles');
const createProjectContainer = document.querySelector('.CreateProjectContainer');
export default function handleErrorMessage(){
    function handleErrorAppear(){
        errorBox.style.display = "block";
        createProjectContainer.style.display = "none";
    }
    function handleErrorButtonClick(){
        errorButton.addEventListener('click',(event) => {
            event.preventDefault()
            errorBox.style.display = "none";
        })
    }
    handleErrorAppear();
    handleErrorButtonClick();
}