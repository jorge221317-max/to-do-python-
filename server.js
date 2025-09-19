app.get("/api/images", (req, res) => {
  const imagesDir = path.join(__dirname, "public", "images");
  fs.readdir(imagesDir, (err, files) => {
    if (err) return res.status(500).json({ error: "No se pueden listar las imágenes" });
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.json(images);
  });
});
