

const filterOrigin = async (origin, allPokemons) => 
    origin === "Created"
    ? allPokemons.filter((pokemon) => pokemon.id > 1281)
    : allPokemons.filter((pokemon) => pokemon.id < 1281);
    

module.exports = filterOrigin;