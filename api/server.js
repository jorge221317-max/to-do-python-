import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB conectado"))
.catch(err => console.error("❌ Error MongoDB:", err));

// Rutas
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

// Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`));
