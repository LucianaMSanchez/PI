
function closeCard (id, pokemons) {
  
    pokemons = pokemons.filter(poke => poke.id !== +id);

   return pokemons;
};

module.exports = closeCard;