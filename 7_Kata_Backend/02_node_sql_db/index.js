const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req,res,next) => { haga cosas y al final ejecute next})
/*
  Podemos utilizar middlewares personalizados que afecten a todos los endpoints
*/
// const { showTime } = require('./middlewares');
// app.use(showTime);

/*
  Podemos utilizar middlewares directamente en un endpoint
*/
// app.get('/', showTime, (req, res) => res.status(200).json({ message: 'Hello World' }));
app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));

app.use('/api/v1', require('./routers'));

console.log('Entorno:', process.env.NODE_ENV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));