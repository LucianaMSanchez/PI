

const orderAttack = (order, pokemons) => 
  order === 'A'
  ? pokemons.sort((a, b) => a.attack - b.attack)
  : pokemons.sort((a, b) => b.attack - a.attack);

module.exports = orderAttack;
