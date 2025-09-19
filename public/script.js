/* Lista de tareas */
function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (!taskText) return;

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

/* Carrusel dinámico desde API */
const slidesContainer = document.getElementById("slides");
let slideIndex = 0;
let totalSlides = 0;

async function loadImages() {
  try {
    const res = await fetch("/api/images");
    const images = await res.json();
    images.forEach(name => {
      const img = document.createElement("img");
      img.src = `images/${name}`;
      img.alt = name;
      slidesContainer.appendChild(img);
    });
    totalSlides = images.length;
    updateSlide();
  } catch (err) {
    console.error("Error cargando imágenes:", err);
  }
}

function updateSlide() {
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

setInterval(() => {
  if (totalSlides > 0) {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlide();
  }
}, 4000);

loadImages();
