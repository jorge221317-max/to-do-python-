import express from 'express';
const app = express();
const PORT = process.env.PORT || 10000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
