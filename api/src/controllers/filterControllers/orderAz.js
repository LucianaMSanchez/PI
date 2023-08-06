
const orderAz = (order, pokemons) => {

    const orderedPokemons = order === 'A'
    ? pokemons.sort((a, b) => a.name.localeCompare(b.name))
    : pokemons.sort((a, b) => b.name.localeCompare(a.name));

  return orderedPokemons;
}

module.exports = orderAz;
