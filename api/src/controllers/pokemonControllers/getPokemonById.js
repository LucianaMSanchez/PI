const { Pokemon, Type } = require("../../db")
const axios = require("axios");
const getData = require("../../utils/getData");

const Url = "https://pokeapi.co/api/v2/pokemon";


const getPokemonById = async (id) =>{

  let foundPokemon = await Pokemon.findOne({
      where: { id },
      include: [
        {
          model: Type,
          through: { attributes: [] }, 
        },
      ],
    });

 if(!foundPokemon){
  const newpokemon = await axios
    .get(`${Url}/${id}`)
    .then((response) => response.data)
    .then((data) => getData(data))
    .catch((error) => {
      throw new Error(`Error fetching data: ${error.message}`);
    });
    foundPokemon = newpokemon;
  }

if(!foundPokemon) throw new Error (`There is no pokemon with id:${id}`)
return foundPokemon;
};
  


module.exports = getPokemonById;