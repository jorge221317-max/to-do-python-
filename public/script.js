/* Lista de tareas */
function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => span.classList.toggle("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("task-list").appendChild(li);
  taskInput.value = "";
}

/* Carrusel de paisajes */
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) slideIndex = 0;
  updateSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  updateSlide();
}

setInterval(() => {
  slideIndex++;
  if (slideIndex >= totalSlides) slideIndex = 0;
  updateSlide();
}, 4000);
