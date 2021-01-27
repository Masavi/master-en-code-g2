import "./styles/style.scss";
import POKEMONS from "./pokedex";
const TYPES = "Tipos";
const EVOLUTIONS = "Evoluciones";
const MODAL_SELECTOR = "#pokeDetailInformacion";

// PENDIENTE
const buildPokeModalImage = (pokemon) => {
  const pokeImage = document.createElement("img");
  pokeImage.classList.add("img-fluid");
  pokeImage.src = pokemon.art_url;
  pokeImage.alt = "PokeImage";
  return pokeImage;
};

// PENDIENTE
const buildPokeModalDescription = (pokemon) => {
  const pokeDescription = document.createElement("p");
  pokeDescription.innerText = pokemon.description;
  return pokeDescription;
};

// PENDIENTE
const buildPokeModalDetails = (pokemon) => {
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

  pokemon.evolutions.map((evolution) => {
    const pokeDetailsType = document.createElement("span");
    pokeDetailsType.innerText = evolution.to;
    pokeDetailsType.classList.add("badge", "badge-success", "p-2", "m-1");
    pokeEvolutions.appendChild(pokeDetailsType);
  });
  pokeTypes.appendChild(pokeTypesTitle);
  pokeEvolutions.appendChild(pokeEvolutionsTitle);
  pokeDetails.appendChild(pokeTypes);
  pokeDetails.appendChild(pokeEvolutions);
  return pokeDetails;
};

// Se usa con el modal
// Está invocando varias funciones del archivo
$(MODAL_SELECTOR).on("show.bs.modal", (event) => {
  const modal = $(MODAL_SELECTOR);
  const button = $(event.relatedTarget);
  const modalBody = modal.find(".modal-body");
  const dataAttributes = button.data();
  const pokemon = POKEMONS.find(
    (pokemon) => pokemon._id === dataAttributes.idPokemon
  );

  modal.find(".modal-title").text(pokemon.name);
  modalBody.html("");

  const pokeImage = buildPokeModalImage(pokemon);
  const pokeDescription = buildPokeModalDescription(pokemon);
  const pokeDetails = buildPokeModalDetails(pokemon);
  modalBody.addClass("d-flex flex-column align-items-center");
  modalBody.append(pokeImage);
  modalBody.append(pokeDescription);
  modalBody.append(pokeDetails);
});

// VA DE LA MANO CON EL SEARCH
const debounce = (fn, delay) => {
  let timeOutId;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// VA DE LA MANO CON SEARCH
const searchPokemon = (e) => {
  const pokemonListFiltered = POKEMONS.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
  );
  renderPokeList(pokemonListFiltered.map((pokemon) => buildePokeCard(pokemon)));
};

// SEARCH
document
  .getElementById(SEARCH_SELECTOR)
  .addEventListener("keyup", debounce(searchPokemon, 300));

const pokemonCardList = POKEMONS.map((pokemon) => buildePokeCard(pokemon));
renderPokeList(pokemonCardList);
