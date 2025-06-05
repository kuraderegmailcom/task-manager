let tasks = [];
let taskId = 0;
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTitle = taskInput.value.trim();

  if (taskTitle === "") {
    alert("Task cannot be empty!");
    return;
  }
   const newTask = {
    id: ++taskId,
    title: taskTitle,
    completed: false
   }

   tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    li.className = task.completed ? "completed" : "";

    li.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };
 
  });
}

