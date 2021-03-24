const axios = require('axios');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
  1.- Agrega un endpoint ‘/api/’ que responda a 
  una petición de tipo GET con un código de estado 200 
  y el siguiente json: 
              {‘mensaje’:‘hola mundo’}
*/

app.get('/api/', (req, res) => {
  res.status(200).json({ mensaje: "hola mundo" });
});
            
/*
2.- Agrega un endpoint ‘/api/suma’ que responda a una 
petición de tipo GET con la suma de dos números que 
reciba mediante las querys num1 y num2. El servidor
debe responder con un código de estado 200 y un json 

como el siguiente:
                {‘resultado’: 7}
*/

app.get('/api/suma', (req, res) => {
  const { num1, num2 } = req.query;

  res.status(200).json({
    message: parseInt(num1) + parseInt(num2)
  });
});

/*
3.- Agrega un endpoint ‘/api/usuario/’ que responda a
una petición de tipo GET con el nombre que sea 
recibido a través de params. El servidor debe responder
con un código de estado 200 y un json como este:
              {‘usuario’: ‘Edwin’}
*/

app.get('/api/usuario/:user', (req, res) => {
  const { user } = req.params;
  res.status(200).json({ message: user });
});

/*
4.- Agrega un endpoint ‘/api/swapi’ que responda a una
petición de tipo GET con el personaje solicitado de 
                https://swapi.dev/

El cliente debe mandar el número de personaje mediante
params. La respuesta del servidor debe lucir algo así
            {‘personaje’: {
                ‘name’: ‘Luke Skywalker’,
                ...,
            }}
*/

// const getCharacterFromSWAPI = async (idCharacter) => {
//   const { data } = await axios.get(`https://swapi.dev/api/people/${idCharacter}/`);
//   return data;
// }

// app.get('/api/swapi/:idCharacter', async (req, res) => {
//   const { idCharacter } = req.params;
//   const character = await getCharacterFromSWAPI(idCharacter);
//   console.log(character);
//   res.status(200).json(character);
// });

/*
5.- Agrega un endpoint ’/api/body que responda a una
petición de tipo PUT con el body que el cliente envíe al hacer la petición. 

Ejemplo: cliente envía un body desde postman o insomnia que luce como este:

            { “nombre”: “Maui”, “ocupacion”: “Sensei” }
*/

app.put('/api/body', (req, res) => {
  // console.log(req.body);
  res.status(200).json(req.body);
});

/*
  ¿Cómo refactorizar un endpoint 
    para trabajar con la arquitectura
      MVC? (Modelo - Vista - Controlador)
*/

// Tomando el ejercicio 4...

// Modelo
const getCharacterFromSWAPI = async (idCharacter) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/${idCharacter}/`);
  return data;
}

// Controlador
const controlador = async (req, res) => {
  const { idCharacter } = req.params;
  if (idCharacter < 1 || idCharacter > 50) {
    return res.status(404).json({ message: 'Character no found' });
  }

  try {
    const character = await getCharacterFromSWAPI(idCharacter);
    return res.status(200).json(character); 
  } catch (error) {
    return res.status(500).json({ message: 'something went wrong!' }); 
  }
}

// Vista
app.get('/api/swapi/:idCharacter', controlador)

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
