import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());

// Endpoints de tareas
app.use("/api/tasks", taskRoutes);

// ✅ Endpoint raíz para probar la API
app.get("/", (req, res) => {
  res.send("API To-Do corriendo correctamente 🚀");
});

const PORT = process.env.PORT || 10000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
