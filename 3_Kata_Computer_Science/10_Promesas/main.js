const buscaPokemon = (nombre) => {
  const pokeName = nombre.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        response.json()
          .then((pokemon) => console.log(pokemon))
          .catch((err) => console.log(err))
      } else {
        console.log('Pokémon no encontrado');
      }
    })
    .catch((error) => console.log(error));
}

buscaPokemon('eevee');
// buscaPokemon('Gengar');
// buscaPokemon('PIKACHU');
// buscaPokemon('perro');