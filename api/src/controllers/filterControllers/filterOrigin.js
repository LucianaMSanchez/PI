

const filterOrigin = async (origin, allPokemons) => {
    let originPokemons = [];
    
    origin === "Created"
    ? originPokemons = allPokemons.filter((pokemon) => pokemon.id > 1281)
    : originPokemons = allPokemons.filter((pokemon) => pokemon.id < 1281);
    
    if(!originPokemons) throw new Error ( "No pokemons match this search");
    return originPokemons;
};


module.exports = filterOrigin;