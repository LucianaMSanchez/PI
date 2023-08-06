const { Type, Pokemon } = require("../../db");

const addPokemonsToType = async (name) => {
    const type = await Type.findOne({
        where: { 
          name : {
            [Op.iLike]: `%${name}%`, 
          },
        },
     })
   
    if(!type.pokemons) throw new Error ("No pokemons related to this type")
    for (const pokemon of type.pokemons) {
        const foundPokemon = await Pokemon.findByPk(id)
        if(!foundPokemon)throw new Error ("We couldn't find pokemons related to this type")
        await type.addPokemons(foundPokemon);
    }
    const pokemons = await type.getPokemons();
    return pokemons;
  }

  module.exports = addPokemonsToType;