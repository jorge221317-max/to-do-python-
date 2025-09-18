import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/tasks", (req, res) => {
  // Lista de tareas ejemplo
  const tasks = [
    { id: 1, title: "Hacer ejercicio" },
    { id: 2, title: "Leer un libro" },
    { id: 3, title: "Aprender Node.js" }
  ];
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
