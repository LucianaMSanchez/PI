

const orderSpeed = (order, pokemons) => 
  order === 'A'
  ? pokemons.sort((a, b) => a.speed - b.speed)
  : pokemons.sort((a, b) => b.speed - a.speed);


module.exports = orderSpeed;