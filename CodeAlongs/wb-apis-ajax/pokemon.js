import axios from 'axios';

function getPokemon() {
  const numPokemon = document.querySelector('#num-pokemon').value;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`;

  axios.get(url).then(response => {
    let pokemonList = "";
    for (const pokemon of response.data.results) {
      pokemonList += `<li>${pokemon.name}</li>`;
    }
    document.querySelector('#pokemon-list').innerHTML = pokemonList;
  });
}

const button = document.querySelector('#get-pokemon');
button.addEventListener('click', getPokemon);