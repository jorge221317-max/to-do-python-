// --- Tareas ---
async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerHTML = `${t.text} <button class="btn btn-danger btn-sm">X</button>`;
    li.querySelector("button").onclick = () => deleteTask(t.id);
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;
  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value })
  });
  input.value = "";
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`/api/tasks/${id}`, { method: "DELETE" });
  loadTasks();
}

document.getElementById("addTask").onclick = addTask;
loadTasks();

// --- Imágenes ---
async function loadImages() {
  const res = await fetch("/api/images");
  const images = await res.json();
  const carousel = document.getElementById("carousel-inner");
  carousel.innerHTML = "";
  images.forEach((img, index) => {
    const div = document.createElement("div");
    div.className = `carousel-item ${index === 0 ? "active" : ""}`;
    div.innerHTML = `<img src="images/${img}" class="d-block w-100 rounded" alt="${img}">`;
    carousel.appendChild(div);
  });
}

loadImages();
