const request = require('request');

// request.get('https://pokeapi.co/api/v2/pokemon/ditto', function (error, response, body) {
//   if (response.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(json.abilities[0].ability.name);
//   } else {
//     console.log("Ocurrio un error en la peticion...");
//   }
// });

const getPokemonByName = (name) => {
  request.get(`https://pokeapi.co/api/v2/pokemon/${name}`, function (error, response, body) {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json.abilities);
    } else {
      console.log("Ocurrio un error en la peticion...");
    }
  });
}

// getPokemonByName("porygon");

/*
2.- Hacer una funcion que haga una petición 
    (Ejemplo: peticionLibro(“i robot”);
    Buscar un libro y traer el o los autores del primer libro
    http://openlibrary.org/search.json?q=i+robot) 
*/

// Para acceder a los autores del primer libro tengo que:
// body.docs[0].author_name[n]

const getAuthorsByBookName = (bookName) => {
  const URL_OPEN_LIBRARY = `http://openlibrary.org/search.json?q=${bookName}`;
  request.get(URL_OPEN_LIBRARY, (err, response, body) => {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      // console.log(json.docs[0]["author_name"][0]) -> Sintaxis opcional para acceder a propiedades de un objeto
      // json.docs[0].author_name.forEach((author) => {console.log(author)})
      json.docs[0].author_name.forEach(author => console.log(author));
      // json.docs.forEach(book => console.log(book.title_suggest))
      /*
        TODO: Buscar qué es y cómo funciona 
          - map
          - filter
          - reduce
      */
    } else {
      console.log("Hubo un error", response.statusCode)
    }
  })
}

getAuthorsByBookName("i robot");

/*
3.- Hacer una petición por autor y devolver la lista de 
    sus libros
        http://openlibrary.org/search.json?author=asimov

4.- Hacer una petición y devolver el género de la banda deseada
    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

5.- Hacer una petición a la swapi a un personaje y obtener 
    sus películas.
                    https://swapi.co/

6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta el día de ayer.
                    https://api.nasa.gov/

7.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
    y peso.
                    https://pokeapi.co/
*/