const successNotificationContainer = document.querySelector('.successNotificationContainer');
const closeButton = document.getElementById('closeButton');

export function showSuccessNotification() {
    successNotificationContainer.style.display = "flex";
}

export function hideSuccessNotification() {
    closeButton.addEventListener('click', () => {
        successNotificationContainer.style.display = "none";
        console.log("click");
    });
}

export function forceHideSuccessNotification() {
    successNotificationContainer.style.display = "none";
}

hideSuccessNotification();