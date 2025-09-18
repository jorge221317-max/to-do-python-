const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0"; // IMPORTANTE para Render

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
