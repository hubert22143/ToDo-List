import {defaultTabBehaviour} from './handleDefaultTab.js';
export default function projectClickHandler(project){
    const todayTab = document.querySelector('.todayPage');
    project.addEventListener('click', () => {
        todayTab.innerHTML = '';
        defaultTabBehaviour();
    })
}