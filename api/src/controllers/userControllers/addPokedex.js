const { OwnPokemon, Pokemon, User} = require("../../db");

const addPokedex = async (id, userId) => {
    const user = await User.findByPk(userId);
    let poke = await Pokemon.findByPk(id);
    
    await user.addPokemon(poke)
    const pokedex = await user.getPokemons();
    
    if(!pokedex) throw new Error("You can't add this pokemon!");

    return pokedex;
};


module.exports = addPokedex;