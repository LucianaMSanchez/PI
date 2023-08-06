const orderSpeed = (order, pokemons) => {

    const orderedPokemons = order === 'A'
    ? pokemons.sort((a, b) => a.speed - b.speed)
    : pokemons.sort((a, b) => b.speed - a.speed);

  return orderedPokemons;
}

module.exports = orderSpeed;