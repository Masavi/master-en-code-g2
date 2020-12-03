import './styles/main.scss'; // acá estamos trayendo los estilos del main para que los loaders de webpack puedan procesarlo
import Pokedex from './pokedex';
import axios from 'axios';
//const request = require('request')
// Traer todos los pokemones
const init = () => { 
    let pokemonesAPI = [];
    // TODO: Cosultar API
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
        .then(function (response) {
            pokemonesAPI = response.data.results;
            const pokemons = new Pokedex(pokemonesAPI);
            console.log(pokemons);
        })
        .catch(function (error) {
            console.log(error);
        });
};
// Renderizar cada pokemon

// por pokemon vamos a activar un modal para visualizarlo

init();