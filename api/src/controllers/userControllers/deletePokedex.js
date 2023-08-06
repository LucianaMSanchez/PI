const { Pokemon, User} = require("../../db");

const deletePokedex = async (id, userId) => {
 
    const poke = await Pokemon.findByPk(id);
    const user = await User.findByPk(userId);
  
    if(!(await user.removePokemon(poke))) throw new Error("You can't delete this pokemon!");

    const pokedex = await user.getPokemons();
    return pokedex;
};


module.exports = deletePokedex;