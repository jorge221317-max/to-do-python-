// ===== Lista de tareas =====
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => li.remove());
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// ===== Carrusel de imágenes =====
let images = [];
let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Traer imágenes dinámicamente desde el servidor
fetch("/api/images")
  .then(res => res.json())
  .then(data => {
    images = data;
    if(images.length > 0){
      currentIndex = 0;
      carouselImage.src = `/images/${images[currentIndex]}`;
    }
  })
  .catch(err => console.error("Error cargando imágenes:", err));

prevBtn.addEventListener("click", () => {
  if(images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImage.src = `/images/${images[currentIndex]}`;
});

nextBtn.addEventListener("click", () => {
  if(images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = `/images/${images[currentIndex]}`;
});
