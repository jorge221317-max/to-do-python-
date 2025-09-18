import express from "express";

const router = express.Router();

// GET /api/tasks → devuelve lista de tareas de prueba
router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Aprender Node.js", completed: false },
    { id: 2, title: "Probar deploy en Render", completed: true }
  ]);
});

// POST /api/tasks → crea una tarea (falsa por ahora)
router.post("/", (req, res) => {
  const { title } = req.body;
  res.status(201).json({ id: Date.now(), title, completed: false });
});

export default router;
