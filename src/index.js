import "./styles.css";
const addTask = document.querySelector("#addTask");
function myTask(title, description, priority, dueDate, notes) {
  const task = {};
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
  task.notes = notes;
  return task;
}
const dialog = document.createElement("dialog");
dialog.id = "taskDialog";
const form = document.createElement("form");
dialog.appendChild(form);
const closeDialog = document.createElement("button");
const closeDialogIcon = document.createElement("span");
closeDialogIcon.className = "material-symbols-outlined";
closeDialogIcon.textContent = "close";
closeDialog.style.position = "absolute";
closeDialog.style.top = "0";
closeDialog.style.right = "0";
closeDialog.appendChild(closeDialogIcon);
form.appendChild(closeDialog);
const titleP = document.createElement("p");
form.appendChild(titleP);
const title = document.createElement("input");
title.type = "text";
title.placeholder = "Title";
titleP.appendChild(title);
const todoListP = document.createElement("p");
form.appendChild(todoListP);
const todoList = document.createElement("input");
todoList.setAttribute("list", "toDoList");
const todoDatalist = document.createElement("datalist");
todoDatalist.id = "toDoList";
todoListP.appendChild(todoDatalist);
const option1 = document.createElement("option");
option1.value = "Work";
todoDatalist.appendChild(option1);
const option2 = document.createElement("option");
option2.value = "Personal";
todoDatalist.appendChild(option2);
const option3 = document.createElement("option");
option3.value = "Shopping";
todoDatalist.appendChild(option3);
todoListP.appendChild(todoList);
const priorityP = document.createElement("p");
form.appendChild(priorityP);
const priority = document.createElement("select");
const priorityLabel = document.createElement("label");
priorityLabel.textContent = "Priority";
priorityLabel.htmlFor = "priority";
priorityP.appendChild(priorityLabel);
priorityP.appendChild(priority);
priority.id = "priority";
const highPriority = document.createElement("option");
highPriority.innerHTML = "High";
const mediumPriority = document.createElement("option");
mediumPriority.innerHTML = "Medium";
const lowPriority = document.createElement("option");
lowPriority.innerHTML = "Low";
priority.appendChild(highPriority);
priority.appendChild(mediumPriority);
priority.appendChild(lowPriority);
const dueDate = document.createElement("input");
dueDate.type = "datetime-local";
// dueDate.className = "material-symbols-outlined";
// dueDate.innerHTML = "alarm";
const now = new Date();
const dateString = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 16);

dueDate.setAttribute("min", dateString);
dueDate.value = dateString;
dueDate.id = "dueDate";
priorityP.appendChild(dueDate);
const notes = document.createElement("textarea");
notes.rows = "5";
notes.cols = "20";
notes.id = "notes";
form.appendChild(notes);
const btnDiv = document.createElement("div");
form.appendChild(btnDiv);

const saveBtn = document.createElement("button");
saveBtn.textContent = "Save";
saveBtn.id = "save";
btnDiv.appendChild(saveBtn);
const cancelBtn = document.createElement("button");
cancelBtn.textContent = "Cancel";
cancelBtn.id = "cancel";
btnDiv.appendChild(cancelBtn);
btnDiv.className = "saveAndCancel";
document.body.appendChild(dialog);
addTask.addEventListener("click", () => {
  dialog.showModal();
});
// window.onclick = function (event) {
//   if (event.target == dialog) {
//     dialog.style.display = "none";
//   }
// };
closeDialog.addEventListener("click", () => {
  dialog.close();
});

const listDropdown = document.querySelector("#listDropdown");
const listFolder = document.querySelector(".listFolder");
const listDropup = document.querySelector("#listDropup");
listDropdown.addEventListener("click", () => {
  listFolder.style.display = "none";
  listDropdown.style.display = "none";
  listDropup.style.display = "inline-block";
});
listDropup.addEventListener("click", () => {
  listFolder.style.display = "block";
  listDropup.style.display = "none";
  listDropdown.style.display = "inline-block";
});
