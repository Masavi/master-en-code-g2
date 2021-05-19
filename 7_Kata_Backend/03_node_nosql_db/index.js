const express = require('express');
const app = express(); // Aplicación de API
const PORT = 4020 || process.env.PORT;

app.get('/prueba', (req, res) => {
  res.status(200).json({ message: 'Todo cool' });
});

app.listen(PORT, () => console.log("It's alive!"));
