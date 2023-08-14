const { Type, OwnPokemon } = require("../../db")


const getOwnPokemonById = async (id) =>{

  const ownPokemon = await OwnPokemon.findOne({
    where: {id},
    include: [
      {
        model: Type,
        through: { attributes: [] }, 
      },
    ],
  });
  
  if(!ownPokemon) throw new Error(`There is no pokémon with id: ${id}`)
  return ownPokemon;
}


module.exports =  getOwnPokemonById;