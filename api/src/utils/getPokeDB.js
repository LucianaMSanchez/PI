const { Pokemon, Type } = require("../db")

const getPokeDB = async (id) =>{

let foundPokemon = await Pokemon.findOne({
    where: { id },
    include: [
      {
        model: Type,
        through: { attributes: [] }, 
      },
    ],
  });
  return foundPokemon;
}

module.exports = getPokeDB;