const axios = require("axios");
const getData = require("../../utils/getData");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const totalRandomPokemons = 12;
const totalPokemons = 1281;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomPokemons = async () => {
  let randomIndices = new Set();

  while (randomIndices.size < totalRandomPokemons) {
    randomIndices.add(getRandomInt(1, totalPokemons));
  }

  const randomPokemonPromises = Array.from(randomIndices).map((index) =>
    axios.get(`${baseUrl}${index}/`)
  );

  const randomPokemonResponses = await Promise.all(randomPokemonPromises);
  const randomPokemons = await Promise.all(
    randomPokemonResponses.map((response) => getData(response.data))
  );

  if (!randomPokemons) {
    throw new Error(`Error fetching random pokemons`);
  }

  return randomPokemons;
};

module.exports = getRandomPokemons;
