(()=>{"use strict";function e(){const e=new Uint32Array(2);window.crypto.getRandomValues(e);const t=e[0]*Math.pow(2,32)+e[1];return`${Date.now()}${t}`}class t{constructor(t){this.name=t,this.tasks=[],this.id=e()}}class n{static projects=[];static createProject(e){const a=new t(e);return n.projects.push(a),a}static deleteProject(e){const t=n.projects.findIndex((t=>t.name===e));-1!==t&&n.projects.splice(t,1)}static showArray(){console.log(n.projects)}static addTask(e,t){e.tasks.push(t)}}const a=document.querySelector(".errorContainer"),c=document.getElementById("errorButtonStyles"),o=document.querySelector(".CreateProjectContainer");function d(){a.style.display="block",o.style.display="none",c.addEventListener("click",(e=>{e.preventDefault(),a.style.display="none"}))}const r=document.querySelector(".successufullNotificationContainer"),l=document.getElementById("closeButton");function s(){r.style.display="flex",setTimeout((()=>{r.style.display="none"}),5e3),l.addEventListener("click",(()=>{r.style.display="none",console.log("click")}))}function i(e){const t=document.querySelector(".todayPage"),n=document.createElement("table"),a=document.createElement("thead"),c=document.createElement("tr");["ID","Title","Description","startDate","startHour","endDate","endHour","taskPriority"].forEach((e=>{const t=document.createElement("th");t.appendChild(document.createTextNode(e)),c.appendChild(t)})),a.appendChild(c),n.appendChild(a);const o=document.createElement("tbody");(Array.isArray(e)?e:[e]).forEach(((e,t)=>{const n=document.createElement("tr"),a=document.createElement("td");a.appendChild(document.createTextNode(t)),n.appendChild(a);const c=document.createElement("td");c.appendChild(document.createTextNode(e.title)),n.appendChild(c);const d=document.createElement("td");d.appendChild(document.createTextNode(e.description)),n.appendChild(d);const r=document.createElement("td");r.appendChild(document.createTextNode(e.startDate)),n.appendChild(r);const l=document.createElement("td");l.appendChild(document.createTextNode(e.startHour)),n.appendChild(l);const s=document.createElement("td");s.appendChild(document.createTextNode(e.endDate)),n.appendChild(s);const i=document.createElement("td");i.appendChild(document.createTextNode(e.endHour)),n.appendChild(i);const u=document.createElement("td");u.appendChild(document.createTextNode(e.priority)),n.appendChild(u),o.appendChild(n)})),n.appendChild(o),t.appendChild(n)}function u(){document.querySelectorAll(".default").forEach((e=>{e.addEventListener("click",(e=>{"Default Project"===e.target.textContent&&m()}))}))}function m(){let e=n.projects.find((e=>"Default Project"===e.name)).tasks;h(),i(e)}function h(){document.querySelector(".todayPage").innerHTML=""}function p(e){e&&(function(e){const t=document.querySelector(".listOfProjects"),n=document.createElement("div");n.setAttribute("data-project-id",e.id),n.classList.add("default");const a=document.createElement("img");a.src="images/hashtag.png",a.classList.add("stylizedImg");const c=document.createElement("span");c.textContent=e.name,n.appendChild(a),n.appendChild(c),t.appendChild(n),function(e){const t=document.querySelector(".todayPage");e.addEventListener("click",(()=>{t.innerHTML="",u()}))}(n)}(e),function(){const e=document.getElementById("availableProjects");e.innerHTML="";const t=new Set;n.projects.forEach((e=>{t.add(e.name)})),t.forEach((t=>{const n=document.createElement("option");n.value=t,n.textContent=t,e.appendChild(n)}))}())}class y{constructor(){this.createProjectImage=document.getElementById("CreateProject"),this.createProjectSubmit=document.getElementById("CreateProjectSubmit"),this.submitButtonProjectValue=document.getElementById("ProjectNameHolder"),this.createProjectContainer=document.querySelector(".CreateProjectContainer"),this.createProjectCancel=document.getElementById("CreateProjectCancel")}handleProjectOpen(){this.createProjectImage.addEventListener("click",(()=>{this.createProjectContainer.style.display="flex"}))}handleProjectCreate(){if(""!==this.submitButtonProjectValue.value){const e=/\d/.test(this.submitButtonProjectValue.value);if(this.submitButtonProjectValue.value.length>=3&&!e){const e=n.createProject(this.submitButtonProjectValue.value);e?(this.createProjectContainer.style.display="none",p(e),s()):d()}else d()}}handleButtonSubmit(){this.createProjectSubmit.addEventListener("click",(e=>{e.preventDefault(),this.handleProjectCreate(),n.showArray()}))}handleProjectCancel(){this.createProjectCancel.addEventListener("click",(()=>{this.createProjectContainer.style.display="none"}))}}class C{constructor(t,n,a,c,o,d,r,l){this.title=t,this.description=n,this.startDate=a,this.startHour=c,this.endDate=o,this.endHour=d,this.priority=r,this.taskId=e()}static createTask(e,t,n,a,c,o,d,r){return new C(e,t,n,a,c,o,d,r)}}class E{constructor(){this.title=document.getElementById("TaskNameHolder").value,this.description=document.getElementById("TaskTextArea").value,this.startDate=document.getElementById("TaskDateStart").value,this.startHour=document.getElementById("TaskHourStart").value,this.endDate=document.getElementById("TaskDateEnd").value,this.endHour=document.getElementById("TaskHourEnd").value,this.taskPriority=document.getElementById("taskPriority").value,this.selectedProjectName=document.getElementById("availableProjects").value}assignValuesToProject(){const e=C.createTask(this.title,this.description,this.startDate,this.startHour,this.endDate,this.endHour,this.taskPriority);console.log(e);const t=n.projects.find((e=>e.name===this.selectedProjectName));console.log(t),t?(n.addTask(t,e),n.showArray()):console.log("Some ugly error occured")}}function k(e){if("Default Project"!==e){let t=n.projects;console.log(t);let a=t.find((t=>t.name===e));a?i(a.tasks):console.log("Current project not found")}else m()}class j{constructor(){this.createTaskImage=document.getElementById("createTask"),this.createTaskSubmit=document.getElementById("CreateTaskSubmit"),this.submitButtonTaskValue=document.getElementById("TaskNameHolder"),this.createTaskContainer=document.querySelector(".CreateTaskContainer"),this.createTaskCancel=document.getElementById("CreateTaskCancel"),this.defaultProjectName="Default Project",this.availableProjectsSelect=document.getElementById("availableProjects")}handleTaskOpen(){this.createTaskImage.addEventListener("click",(()=>{this.createTaskContainer.style.display="flex",r.style.display="none"}))}taskButtonSubmit(){this.createTaskSubmit.addEventListener("click",(e=>{e.preventDefault(),console.log(this.submitButtonTaskValue.value),this.createTaskContainer.style.display="none",(new E).assignValuesToProject(),s(),this.defaultProjectName===this.availableProjectsSelect.value?m():document.querySelectorAll(".default").forEach((e=>{const t=e.querySelector("span").textContent;console.log(t),h(),k(t),e.addEventListener("click",(()=>{h(),k(t)}))}))}))}handleTaskCancel(){this.createTaskCancel.addEventListener("click",(()=>{this.createTaskContainer.style.display="none"}))}}function g(){let e=document.querySelector(".todayPage").innerHTML;document.querySelector(".dailyTasks").addEventListener("click",(()=>{document.querySelector(".todayPage").innerHTML=e}))}let P={};function f(){n.projects.forEach((e=>{let t=e.tasks;if(t.length>0){let n=t.some((e=>void 0!==e.endDate));n?t.forEach((t=>{let n=t.title,a=t.startDate,c=t.startHour,o=t.endHour,d=t.endDate,r=e.name,l=t.taskId;var s;s=l,document.getElementById(s)||(function(e,t,n,a,c,o,d){let r=document.querySelector(".myProjects");null===r&&console.log("Hehe"),console.log(r);let l=document.createElement("div");l.classList.add("myDynamicallyCreatedProject"),l.id=`${d}`;let s=document.createElement("hr"),i=document.createElement("div");i.classList.add("dynamicallyCreatedProject1");let u=document.createElement("div");u.classList.add("checkBoxStylize");let m=document.createElement("input");m.type="checkbox",m.classList.add("checkProject"),u.appendChild(m);let h=document.createElement("div");h.classList.add("orangeLineSeperator");let p=document.createElement("div");p.classList.add("seperatedTittleOutput");let y=document.createElement("div");y.classList.add("tittleOutput"),y.textContent=`${e}`;let C=document.createElement("div");C.classList.add("hourOutput"),C.textContent=`Your task start at ${t} ${n}, and end at ${a} ${c} `,p.appendChild(y),p.appendChild(C);let E=document.createElement("div");E.classList.add("seperatedProjectOutput");let k=document.createElement("b");k.classList.add("adherenceToProject"),k.textContent=`${o}`,E.appendChild(k),i.appendChild(u),i.appendChild(h),i.appendChild(p),i.appendChild(E),l.appendChild(s),l.appendChild(i),r.appendChild(l)}(n,c,a,o,d,r,l),function(){let e=document.querySelectorAll(".checkProject");e&&e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".myDynamicallyCreatedProject"),n=t.getAttribute("id");e.checked?(console.log("The checkbox has been checked now"),function(e){const t=e.getAttribute("id");P[t]={title:e.querySelector(".tittleOutput").textContent,hourOutput:e.querySelector(".hourOutput").textContent,projectAdherence:e.querySelector(".adherenceToProject").textContent};let n=e.querySelector(".tittleOutput"),a=e.querySelector(".hourOutput"),c=e.querySelector(".adherenceToProject");n.textContent="",a.textContent="",c.textContent=""}(t),function(e){let t=e.querySelector(".seperatedProjectOutput");if(t){let e=document.createElement("div");e.classList.add("CreatedAutomaticallyCheckbox"),e.style.display="flex",e.style.flexDirection="column";let n=document.createElement("img");n.src="images/trash.png",n.classList.add("stylizedImg"),n.id="trashContainer",n.style.marginBottom="10px";let a=document.createElement("img");a.src="images/edit.png",a.classList.add("stylizedImg"),a.id="editContainer",a.style.marginBottom="10px",e.appendChild(n),e.appendChild(a),t.appendChild(e)}else console.error("Parent container not found.")}(t)):(console.log("The checkbox has been unchecked"),function(e){let t=e.querySelector(".CreatedAutomaticallyCheckbox");t&&t.remove()}(t),function(e,t){const n=P[t];e.querySelector(".tittleOutput").textContent=n.title,e.querySelector(".hourOutput").textContent=n.hourOutput,e.querySelector(".adherenceToProject").textContent=n.projectAdherence}(t,n))}))}))}()),g()})):console.log("It doesn't have an end date, nothing happens")}}))}const T=document.querySelector(".todayPage");document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=new y;e.handleProjectOpen(),e.handleButtonSubmit(),e.handleProjectCancel()}(),function(){const e=new j;e.handleTaskOpen(),e.taskButtonSubmit(),e.handleTaskCancel()}(),function(e){if(e){const t=n.createProject(e);if(t){const e=C.createTask("Default Task","Default description","2024-01-15","12:00","2024-01-16","14:00","Medium");n.addTask(t,e),p(t)}}}("Default Project"),g(),f(),u(),T.addEventListener("click",(e=>{"refreshButton"===e.target.id&&f()}))}))})();