

const filterOrigin = async (origin, allPokemons) => {
    let filteredPokemons = [];
    if(origin === "Created"){
        filteredPokemons = allPokemons.filter((pokemon) => pokemon.id > 1281);
    } else {
        filteredPokemons = allPokemons.filter((pokemon) => pokemon.id < 1281);
    }
    

    if(!filteredPokemons) throw new Error ("No pokemons of this origin")
    return filteredPokemons;
};

module.exports = filterOrigin;