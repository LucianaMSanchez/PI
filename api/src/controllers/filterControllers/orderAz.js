
const orderAz = (order, pokemons) =>
 order === 'A'
  ? pokemons.sort((a, b) => a.name.localeCompare(b.name))
  : pokemons.sort((a, b) => b.name.localeCompare(a.name));

  
module.exports = orderAz;
