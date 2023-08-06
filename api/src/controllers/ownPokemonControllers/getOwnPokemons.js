const { User } = require("../../db")

const getOwnPokemons = async (userId) =>{
  const user = await User.findByPk(userId);
  const owns = await user.getOwnPokemons();

  if(!owns) throw new Error("You don't have pokemons of your own yet..Create one!");

  return owns;
    
};



module.exports = getOwnPokemons;

