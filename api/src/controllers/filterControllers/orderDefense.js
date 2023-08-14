

const orderDefense = (order, pokemons) => 
  order === 'A'
  ? pokemons.sort((a, b) => a.defense - b.defense)
  : pokemons.sort((a, b) => b.defense - a.defense);


module.exports = orderDefense;