const orderAttack = (order, pokemons) => {

    const orderedPokemons = order === 'A'
    ? pokemons.sort((a, b) => a.attack - b.attack)
    : pokemons.sort((a, b) => b.attack - a.attack);

  return orderedPokemons;
}

module.exports = orderAttack;
