import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API To-Do funcionando 🚀");
});

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
