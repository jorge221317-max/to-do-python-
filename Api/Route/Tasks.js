import express from "express";
import { tasks } from "../models/Task.js";

const router = express.Router();

// Obtener todas las tareas
router.get("/", (req, res) => {
  res.json(tasks);
});

// Crear tarea
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "El título es obligatorio" });

  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar tarea
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

  task.completed = req.body.completed ?? task.completed;
  task.title = req.body.title ?? task.title;
  res.json(task);
});

// Eliminar tarea
router.delete("/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Tarea no encontrada" });

  tasks.splice(index, 1);
  res.json({ message: "Tarea eliminada" });
});

export default router;
