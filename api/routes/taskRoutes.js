import express from "express";

const router = express.Router();

// Lista de tareas en memoria (temporal)
let tasks = [
  { id: 1, title: "Aprender Node.js", completed: false },
  { id: 2, title: "Probar deploy en Render", completed: true }
];

// GET /api/tasks → devuelve lista de tareas
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST /api/tasks → crea nueva tarea
router.post("/", (req, res) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE /api/tasks/:id → elimina tarea por id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.json({ message: "Tarea eliminada" });
});

export default router;
