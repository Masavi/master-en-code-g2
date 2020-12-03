import "./styles/style.scss";
import POKEMONS from "./pokedex";
const POKEDEX_CONTAINER = document.getElementById("pokedex");
const SHOW_MORE = "Ver mas";
const TYPES = "Tipos";
const EVOLUTIONS = "Evoluciones";
const MODAL_SELECTOR = "#pokeDetailInformacion";
const SEARCH_SELECTOR = "searchPokemon";

const buildePokeCard = (pokemon) => {
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
};

const buildPokeModalImage = (pokemon) => {
  const pokeImage = document.createElement("img");
  pokeImage.classList.add("img-fluid");
  pokeImage.src = pokemon.art_url;
  pokeImage.alt = "PokeImage";
  return pokeImage;
};

const buildPokeModalDescription = (pokemon) => {
  const pokeDescription = document.createElement("p");
  pokeDescription.innerText = pokemon.description;
  return pokeDescription;
};

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

const renderPokeList = (pokemonList) => {
  POKEDEX_CONTAINER.innerHTML = "";
  pokemonList.map((pokemon) => POKEDEX_CONTAINER.appendChild(pokemon));
};

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

const searchPokemon = (e) => {
  const pokemonListFiltered = POKEMONS.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
  );
  renderPokeList(pokemonListFiltered.map((pokemon) => buildePokeCard(pokemon)));
};

document
  .getElementById(SEARCH_SELECTOR)
  .addEventListener("keyup", debounce(searchPokemon, 300));

const pokemonCardList = POKEMONS.map((pokemon) => buildePokeCard(pokemon));
renderPokeList(pokemonCardList);
