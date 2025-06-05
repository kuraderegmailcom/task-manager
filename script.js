let tasks = [];
let taskId = 0;
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTitle = taskInput.value.trim();

  if (taskTitle === "") {
    alert("Task cannot be empty!");
    return;
  }
   }