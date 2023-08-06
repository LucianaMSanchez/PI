const orderDefense = (order, pokemons) => {

    const orderedPokemons = order === 'A'
    ? pokemons.sort((a, b) => a.defense - b.defense)
    : pokemons.sort((a, b) => b.defense - a.defense);

  return orderedPokemons;
}

module.exports = orderDefense;