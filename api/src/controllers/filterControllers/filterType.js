

const filterType = async (type, allPokemons) => 
    await allPokemons.filter((poke) => poke.types.some((t) => t === type));


module.exports = filterType;
