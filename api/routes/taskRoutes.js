import express from "express";
import Task from "../models/Task.js";
const router = express.Router();

// Listar todas las tareas
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Crear tarea
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Actualizar tarea
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Borrar tarea
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Tarea eliminada" });
});

export default router;
