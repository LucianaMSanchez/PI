const { Pokemon } = require("../../db")
const getData = require("../../utils/getData");
const getPokeDB = require("../../utils/getPokeDB");
const axios = require("axios");

const Url = "https://pokeapi.co/api/v2/pokemon";

const createPokemon = async (id) => {

  let foundPoke = await getPokeDB(id);

  if(!foundPoke) {    
    const pokemon = await axios
    .get(`${Url}/${id}`)
    .then((response) => response.data)
    .then((data) => getData(data))
    .catch((error) => {
      throw new Error(`Error fetching data: ${error.message}`);
    });

    const newPokemon = await Pokemon.create({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            hitPoints: pokemon.hitPoints,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
       })
      
    if (!newPokemon) throw new Error("Error creating pokemon");
    return newPokemon;
      } else {
        return foundPoke;
      }
  };

  module.exports = createPokemon;