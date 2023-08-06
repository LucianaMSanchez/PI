
const filterType = async (type, filterPokemons) => {
    const filteredPokemons = await filterPokemons.filter((poke) => poke.type.some((t) => t === type));
    if(!filteredPokemons) throw new Error ("No pokemons of this type")
    return filteredPokemons;
};

module.exports = filterType;
