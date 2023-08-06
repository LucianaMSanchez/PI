
const orderHp = (order, pokemons) => {

    const orderedPokemons = order === 'A'
    ? pokemons.sort((a, b) => a.hitPoints - b.hitPoints)
    : pokemons.sort((a, b) => b.hitPoints - a.hitPoints);

  return orderedPokemons;
}

module.exports = orderHp;
