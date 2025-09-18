const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Enter key support
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
