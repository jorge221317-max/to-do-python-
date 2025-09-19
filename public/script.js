// ======= LISTA DE TAREAS =======
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// ======= CARRUSEL DE IMÁGENES =======
const slidesContainer = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let totalSlides = 0;

async function loadImages() {
  try {
    const res = await fetch("/api/images"); // <- si no hay backend, podemos usar un array local
    let images;
    if (res.ok) {
      images = await res.json();
    } else {
      // fallback si no hay API: lista de imágenes locales
      images = ["paisaje1.jpg", "paisaje2.jpg", "paisaje3.jpg"];
    }

    images.forEach(name => {
      const img = document.createElement("img");
      img.src = `images/${name}`;
      img.alt = name;
      slidesContainer.appendChild(img);
    });
    totalSlides = images.length;
    slidesContainer.style.width = `${totalSlides * 100}%`;
    updateSlide();
  } catch (err) {
    console.error("Error cargando imágenes:", err);
  }
}

function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Cambiar imagen cada 3 segundos
setInterval(nextSlide, 3000);

loadImages();
