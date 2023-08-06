

const filterOrigin = async (origin, filterPokemons) => {
    const filteredPokemons = [];
    if(origin === "Created"){
        filteredPokemons = filterPokemons.filter((pokemon) => pokemon.id > 1281);
    } else {
        filteredPokemons = filterPokemons.filter((pokemon) => pokemon.id < 1281);
    }

    if(!filteredPokemons) throw new Error ("No pokemons of this origin")
    return filteredPokemons;
};

module.exports = filterOrigin;