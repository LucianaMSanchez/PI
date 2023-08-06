const { Pokemon, User} = require("../../db");

const addPokedex = async (id, userId) => {
    const user = await User.findByPk(userId);
    const poke = await Pokemon.findByPk(id);

    if(!(await user.addPokemon(poke))) throw new Error("You can't add this pokemon!");

    const pokedex = await user.getPokemons();
    return pokedex;
};


module.exports = addPokedex;