
const filterType = async (type, allPokemons) => {
    const filteredPokemons = await allPokemons.filter((poke) => poke.types.some((t) => t === type));
    if(!filteredPokemons) throw new Error ("No pokemons of this type")
    return filteredPokemons;
};

module.exports = filterType;
