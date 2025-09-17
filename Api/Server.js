// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('API funcionando en Render! 🚀');
});

// Puerto dinámico asignado por Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
  } else {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  }
});

// Manejo de errores globales
process.on('uncaughtException', (err) => {
  console.error('Excepción no capturada:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Rechazo no manejado:', reason);
});
