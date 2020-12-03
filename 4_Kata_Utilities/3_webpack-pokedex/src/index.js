import './styles/main.scss'; // acá estamos trayendo los estilos del main para que los loaders de webpack puedan procesarlo
import Pokedex from './pokedex';
import axios from 'axios';
'use strict';

// Traer todos los pokemones
const init = () => { 

    // TODO: Cosultar API
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
        .then(response => {
            const pokemonesAPI = response.data.results;
            const pokedex = new Pokedex(pokemonesAPI);
            // debugger
            pokedex.renderPokemonsAsCards();
        })
        .catch(function (error) {
            alert('No funciono u_U');
            console.log(error);
        });
};
// Renderizar cada pokemon

// por pokemon vamos a activar un modal para visualizarlo

init();