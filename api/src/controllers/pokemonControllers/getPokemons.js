const axios = require("axios");
const getData = require("../../utils/getData");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
let endpoint = baseUrl;


const getPokemons = async () => {
    let allPokemons = [];
    let pokemonCount = 0;
    let pokemons = [];

    while (endpoint && pokemonCount < 24) {
        const response = await axios.get(endpoint);
        const results = response.data.results;
        allPokemons = [...allPokemons, ...results];
        pokemonCount += results.length;

        endpoint = response.data.next;
    }

    for (const poke of allPokemons) {
      const url = poke.url;
  
      const pokemon = await axios
        .get(url)
        .then((response) => response.data)
        .then((data) => getData(data))
        .catch((error) => {
          throw new Error(`Error fetching ${url}: ${error.message}`);
        });
  
      if (pokemon) {
        pokemons.push(pokemon);
      }
    }
    return pokemons;
};


module.exports = getPokemons;

