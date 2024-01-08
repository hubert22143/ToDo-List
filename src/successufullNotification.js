const successNotificationContainer = document.querySelector('.successufullNotificationContainer');
const closeButton = document.getElementById('closeButton');

export function SuccessufullNotificationHandler(){
    function showSuccessNotification() {
        successNotificationContainer.style.display = "flex";
        hideSuccessNotificationAfterDelay();
    }
    
    function hideSuccessNotification() {
        closeButton.addEventListener('click', () => {
            successNotificationContainer.style.display = "none";
            console.log("click");
        });
    }
    showSuccessNotification()
    hideSuccessNotification()
}
export function forceHideSuccessNotification() {
    successNotificationContainer.style.display = "none";
}
export function hideSuccessNotificationAfterDelay(){
    setTimeout(() => {
        successNotificationContainer.style.display = "none";
    },5000);
}