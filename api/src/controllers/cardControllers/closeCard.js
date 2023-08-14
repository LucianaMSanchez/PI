
const closeCard = (id, pokemons) => 
pokemons.filter(poke => poke.id !== +id);


module.exports = closeCard;