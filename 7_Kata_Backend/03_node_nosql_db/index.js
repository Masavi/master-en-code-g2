require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express(); // Aplicación de API

const { db_uri, PORT } = require('./config');
console.log(db_uri)
mongoose.connect(db_uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/prueba', (req, res) => {
  res.status(200).json({ message: 'Todo chidori' });
});

app.use(require('./routers/UserRouter'));
app.use(require('./routers/ItemRouter'));
app.use(require('./routers/TicketRouter'));

app.listen(PORT, () => console.log(`It's alive on ${PORT}!`));

module.exports = app;