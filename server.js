import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let tasks = []; // tareas en memoria

// --- API de tareas ---
app.get("/api/tasks", (req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const task = { id: Date.now(), text: req.body.text };
  tasks.push(task);
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ success: true });
});

// --- API de imágenes ---
app.get("/api/images", (req, res) => {
  const imagesDir = path.join(__dirname, "public/images");
  fs.readdir(imagesDir, (err, files) => {
    if (err) return res.status(500).json({ error: "No se pudieron leer las imágenes" });
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.json(imageFiles);
  });
});

app.listen(PORT, () => console.log(`✅ Servidor en http://localhost:${PORT}`));
