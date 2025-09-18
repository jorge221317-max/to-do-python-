import express from "express";
import Task from "../models/Task.js";
import { authMiddleware } from "./authMiddleware.js";

const router = express.Router();

// Middleware para proteger rutas
router.use(authMiddleware);

// GET todas las tareas
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST nueva tarea
router.post("/", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
});

// PUT actualizar tarea
router.put("/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

// DELETE tarea
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Tarea eliminada" });
});

export default router;
