const axios = require("axios");
const getData = require("../../utils/getData");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async () => {
  let allPokemons = [];
  let pokemonCount = 0;
  let pokemons = [];

  let endpoint = baseUrl; 

  while (endpoint && pokemonCount < 36) {
    const response = await axios.get(endpoint);
    const results = response.data.results;
    allPokemons.push(...results);
    pokemonCount += results.length;

    endpoint = response.data.next;
  }

  const pokemonPromises = allPokemons.slice(0, 36).map((poke) => axios.get(poke.url)); 


    const pokemonResponses = await Promise.all(pokemonPromises);
    pokemons = await Promise.all(pokemonResponses.map((response) => getData(response.data)));

  if(!pokemons)throw new Error(`Error fetching pokemon details: ${error.message}`);
  return pokemons;
};



module.exports = getPokemons;

