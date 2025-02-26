const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let taskCount = 0;
let completedCount = 0;

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("task-item");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("complete-checkbox");

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  listItem.appendChild(checkBox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  taskInput.value = "";

  taskCount++;
  updateTaskCount();
  removeEmptyMessage(); // Remove "No tasks yet" message when a task is added

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      listItem.classList.add("completed");
      completedCount++;
    } else {
      listItem.classList.remove("completed");
      completedCount--;
    }
    updateTaskCount();
  });

  deleteButton.addEventListener("click", () => {
    if (listItem.classList.contains("completed")) {
      completedCount--;
    }
    taskList.removeChild(listItem);
    taskCount--;
    updateTaskCount();
    checkAndShowEmptyMessage(); // Show "No tasks yet" if no tasks are left
  });
});

function updateTaskCount() {
  totalTasks.textContent = `Total tasks: ${taskCount}`;
  completedTasks.textContent = `Completed: ${completedCount}`;
}

function removeEmptyMessage() {
  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) {
    emptyMessage.remove();
  }
}

function checkAndShowEmptyMessage() {
  if (taskCount === 0) {
    const noTaskMessage = document.createElement("li");
    noTaskMessage.textContent = "No tasks yet. Add one above!";
    noTaskMessage.classList.add("empty-list");
    taskList.appendChild(noTaskMessage);
  }
}

