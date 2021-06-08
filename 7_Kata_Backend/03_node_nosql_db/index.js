require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express(); // Aplicación de API
const PORT = process.env.PORT || 4020;

const { db_uri } = require('./config');

mongoose.connect(db_uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/prueba', (req, res) => {
  res.status(200).json({ message: 'Todo cool' });
});

app.use(require('./routers/UserRouter'));
app.use(require('./routers/ItemRouter'));
app.use(require('./routers/TicketRouter'));

app.listen(PORT, () => console.log(`It's alive on ${PORT}!`));
