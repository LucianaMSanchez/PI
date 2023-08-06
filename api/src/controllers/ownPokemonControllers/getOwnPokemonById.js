const { User, Type } = require("../../db")


const getOwnPokemonById = async (id, userId) =>{
  const user = await User.findByPk(userId);
  const ownPokemon = await user.getOwnPokemons({
    where: { id},
    include: [
      {
        model: Type,
        through: { attributes: [] }, 
      },
    ],
  });
  
  if(!ownPokemon) throw new Error(`There is no pokemon with id:${id}`)
  return ownPokemon;
}


module.exports =  getOwnPokemonById;