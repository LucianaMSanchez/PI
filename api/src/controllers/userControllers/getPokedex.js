const { Pokemon, User} = require("../../db");


const getPokedex = async (userId) => {
  const user = await User.findByPk(userId);

  const pokedex = await user.getPokemons();

  if(!pokedex) throw new Error("You don't have any pokemons yet!")
  return pokedex;
};

module.exports = getPokedex;