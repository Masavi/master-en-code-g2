const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));

app.use('/api/v1', require('./routers'));

console.log('Entorno:', process.env.NODE_ENV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));