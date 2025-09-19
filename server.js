import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 10000;

// Carpeta pública
app.use(express.static("public"));

// Endpoint para obtener la lista de imágenes
app.get("/api/images", (req, res) => {
  const imagesDir = path.join(process.cwd(), "public/images");
  fs.readdir(imagesDir, (err, files) => {
    if (err) return res.status(500).json({ error: "No se pueden leer las imágenes" });
    const images = files.filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f));
    res.json(images);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
