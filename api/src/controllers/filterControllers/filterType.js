

const filterType = async (type, allPokemons) => {
    const filteredPokemons = await allPokemons.filter((poke) => poke.types.some((t) => t === type));

    if(filteredPokemons.length === 0) throw new Error ("No pokemons match this type");
    return filteredPokemons;
};


module.exports = filterType;
