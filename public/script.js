const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ===== Lista de tareas =====
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
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Lista de imágenes (nombres de los archivos que subas a public/images)
const images = ["paisaje1.jpg", "paisaje2.jpg", "paisaje3.jpg"];
let currentIndex = 0;

// Mostrar la primera imagen
carouselImage.src = `/images/${images[currentIndex]}`;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImage.src = `/images/${images[currentIndex]}`;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = `/images/${images[currentIndex]}`;
});
