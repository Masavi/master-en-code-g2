const SHOW_MORE = "Ver mas";

const TYPES = "Tipos";
const EVOLUTIONS = "Evoluciones";
const SEARCH_SELECTOR = "searchPokemon";
const MODAL_SELECTOR = "#pokeDetailInformacion";

const POKEDEX_CONTAINER = document.getElementById("pokedex");

class Pokedex {
    constructor( pokemones = [] ){
        this.pokemones = pokemones;
        this.addEventListenerToSearch();
        this.addEventListenerToModal();
    }

    addEventListenerToSearch() {
      document
        .getElementById(SEARCH_SELECTOR)
        .addEventListener(
          "keyup",
          (e) => this.debounce(this.search(e), 300),
        );
    }

    search(e) {
      const pokemonListFiltered = this.pokemones.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      );

      this.pokemones = pokemonListFiltered;
      this.renderPokemonsAsCards();
    }

    debounce(fn, delay){
      let timeOutId;
      return (...args) => {
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    };

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
    
      pokeImage.src = pokemon.sprites.front_default;
      pokeImage.alt = `${pokemon.name} Image`;
      pokeTitle.innerHTML = `${pokemon.name} <span class="badge badge-dark">${pokemon.id}</span>`;
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
      const pokemonCards = this.pokemones.map((pokemon) => this.buildPokemonCard(pokemon));
      pokemonCards.forEach((pokemon) => POKEDEX_CONTAINER.appendChild(pokemon));
    }

    buildPokeModalImage (pokemon) {
      const pokeImage = document.createElement("img");
      pokeImage.classList.add("img-fluid");
      pokeImage.src = pokemon.sprites.front_default;
      pokeImage.alt = "PokeImage";
      return pokeImage;
    };

    buildPokeModalDescription (pokemon) {
      const pokeDescription = document.createElement("p");
      pokeDescription.innerText = pokemon.description;
      return pokeDescription;
    };

    buildPokeModalDetails (pokemon) {
      const pokeDetails = document.createElement("div");
      const pokeTypes = document.createElement("div");
      const pokeTypesTitle = document.createElement("h5");
      const pokeEvolutions = document.createElement("div");
      const pokeEvolutionsTitle = document.createElement("h5");
    
      pokeTypesTitle.innerText = TYPES;
      pokeEvolutionsTitle.innerText = EVOLUTIONS;
    
      pokemon.types.map((type) => {
        const pokeDetailsType = document.createElement("span");
        pokeDetailsType.innerText = type;
        pokeDetailsType.classList.add("badge", "badge-dark", "p-2", "m-1");
        pokeTypes.appendChild(pokeDetailsType);
      });
    
      // El Objeto de la API no trae el campo "evolutions"

      // pokemon.evolutions.map((evolution) => {
      //   const pokeDetailsType = document.createElement("span");
      //   pokeDetailsType.innerText = evolution.to;
      //   pokeDetailsType.classList.add("badge", "badge-success", "p-2", "m-1");
      //   pokeEvolutions.appendChild(pokeDetailsType);
      // });

      pokeTypes.appendChild(pokeTypesTitle);
      pokeEvolutions.appendChild(pokeEvolutionsTitle);
      pokeDetails.appendChild(pokeTypes);
      pokeDetails.appendChild(pokeEvolutions);
      return pokeDetails;
    };

    addEventListenerToModal() {
      $(MODAL_SELECTOR).on("show.bs.modal", (event) => {
        const modal = $(MODAL_SELECTOR);
        const button = $(event.relatedTarget);
        const cardText = button[0].parentNode.innerText;
        // Venausar 5¢ver más
        // 1- Venasaur 2- 5¢ver mas
        // ["Venasaur", "5¢ver mas"]
        // "5¢ver mas"
        // "5"
        // 5
        const idPokemon = Number(cardText.split(' ')[1].slice(0, 1));
        const modalBody = modal.find(".modal-body");
        const pokemon = this.pokemones.find(
          (pokemon) => pokemon.id === idPokemon
        );
      
        modal.find(".modal-title").text(pokemon.name);
        modalBody.html("");
      
        const pokeImage = this.buildPokeModalImage(pokemon);
        const pokeDescription = this.buildPokeModalDescription(pokemon);
        const pokeDetails = this.buildPokeModalDetails(pokemon);
        modalBody.addClass("d-flex flex-column align-items-center");
        modalBody.append(pokeImage);
        modalBody.append(pokeDescription);
        modalBody.append(pokeDetails);
      });
    }
}

export default Pokedex;