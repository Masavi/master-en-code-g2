import axios from 'axios';

const SHOW_MORE = "Ver mas";
const POKEDEX_CONTAINER = document.getElementById("pokedex");

class Pokedex{
    constructor( pokemones = [] ){
        this.pokemones = pokemones;
    }

    buildPokemonCard(pokemon){
      const pokeContainer = document.createElement("div");
      const pokeImage = document.createElement("img");
      const pokeBody = document.createElement("div");
      const pokeTitle = document.createElement("h5");
      const pokeModalToogle = document.createElement("button");
    
      pokeContainer.classList.add("card", "custom-card");
      if (pokemon.types.length > 1) {
        pokeContainer.style.backgroundImage = `linear-gradient(45deg, ${pokemon.types
          .map((type) => `var(--${type})`)
          .join(", ")})`;
      }
      pokeContainer.style.backgroundColor = `var(--${pokemon.types[0]})`;
      pokeImage.classList.add("card-img-top");
      pokeBody.classList.add(
        "card-body",
        "d-flex",
        "flex-column",
        "align-items-center"
      );
      pokeTitle.classList.add("card-title");
      pokeModalToogle.classList.add("btn", "btn-primary");
    
      pokeImage.src = pokemon.art_url;
      pokeImage.alt = `${pokemon.name} Image`;
      pokeTitle.innerHTML = `${pokemon.name} <span class="badge badge-dark">${pokemon.pkdx_id}</span>`;
      pokeModalToogle.textContent = SHOW_MORE;
    
      pokeModalToogle.setAttribute("data-id-pokemon", pokemon._id);
      pokeModalToogle.setAttribute("data-toggle", "modal");
      pokeModalToogle.setAttribute("data-target", "#pokeDetailInformacion");
    
      pokeBody.appendChild(pokeTitle);
      pokeBody.appendChild(pokeModalToogle);
      pokeContainer.appendChild(pokeImage);
      pokeContainer.appendChild(pokeBody);
      return pokeContainer;
    }

    renderPokemonsAsCards(){
      POKEDEX_CONTAINER.innerHTML = "";

      let promises = this.pokemones.map((pokemon) => {
        // const url = pokemon.url;
        const { url } = pokemon;
        return axios.get(url).then(response => response.data);
      });

      // Wait for all Promises to complete
      Promise.all(promises)
        .then(pokemons => {
          const pokemonCards = pokemons.map((pokemon) => this.buildPokemonCard(pokemon));
          pokemonCards.map((pokemon) => POKEDEX_CONTAINER.appendChild(pokemon));
        })
        .catch(e => {
          console.error('Error en Promise.all', e);
        })
    }
}

export default Pokedex;