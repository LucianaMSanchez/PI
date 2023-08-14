
const orderHp = (order, pokemons) =>
  order === 'A'
  ? pokemons.sort((a, b) => a.hitPoints - b.hitPoints)
  : pokemons.sort((a, b) => b.hitPoints - a.hitPoints);

  
module.exports = orderHp;
