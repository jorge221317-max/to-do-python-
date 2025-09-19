import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static("public"));

// API para devolver lista de imágenes
app.get("/api/images", (req, res) => {
    const imagesDir = path.join(process.cwd(), "images");
    fs.readdir(imagesDir, (err, files) => {
        if (err) return res.status(500).json({ error: "No se pudieron leer las imágenes" });
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
