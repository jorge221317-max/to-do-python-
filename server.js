import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 10000;

// Servir archivos estáticos (HTML, CSS, JS, imágenes)
app.use(express.static("public"));

// Endpoint para listar dinámicamente todas las imágenes de la carpeta
app.get("/api/images", (req, res) => {
  const imagesDir = path.join(process.cwd(), "public", "images"); // ruta absoluta
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error("Error leyendo imágenes:", err);
      return res.status(500).json({ error: "No se pueden listar las imágenes" });
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.json(images);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
