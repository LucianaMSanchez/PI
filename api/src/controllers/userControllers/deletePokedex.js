const { Pokemon, User} = require("../../db");

const deletePokedex = async (id, userId) => {
 
    const poke = await Pokemon.findByPk(id);
    const user = await User.findByPk(userId);

    await user.removePokemon(poke)
    const pokedex = await user.getPokemons();

    if(!pokedex) throw new Error("You can't delete this pokemon!");
    return pokedex;
};


module.exports = deletePokedex;