const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ejemplo de ruta
app.get('/', (req, res) => res.send('Hello Render!'));

// usar el puerto que Render asigna o fallback 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
