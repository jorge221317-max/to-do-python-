const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener('click', () => {
  const tareaTexto = inputTarea.value.trim();
  if (tareaTexto === "") return;

  const li = document.createElement('li');
  li.textContent = tareaTexto;

  const btnBorrar = document.createElement('button');
  btnBorrar.textContent = "Eliminar";
  btnBorrar.addEventListener('click', () => li.remove());

  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);

  inputTarea.value = "";
});
