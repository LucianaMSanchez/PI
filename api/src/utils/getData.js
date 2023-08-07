const getData = async (data) => {
    
    const typesNames = await data.types.map(type =>type.type.name)

    const hpStat = await data.stats.find(stat => stat.stat.name === "hp");
    const hpPoints = hpStat.base_stat;

    const attackStat = await data.stats.find(stat => stat.stat.name === "attack");
    const attackPoints = attackStat.base_stat;

    const defenseStat = await data.stats.find(stat => stat.stat.name === "defense");
    const defensePoints = defenseStat.base_stat;

    const speedStat = await data.stats.find(stat => stat.stat.name === "speed");
    const speedPoints = speedStat.base_stat;

        const obj = {
        id: data.id,
        name: data.name,
        image: data.sprites.other.home.front_default,
        hitPoints: hpPoints,
        attack: attackPoints,
        defense: defensePoints,
        speed: speedPoints,
        height: data.height,
        weight: data.weight,
        types: typesNames,
        }
    if(!obj) throw new Error("Error getting data")    
    return obj;
  };


  const getDataType = async (data) => {
   
    const pokemonsNames = await data.pokemon.map(pokemon => pokemon.pokemon.name);
    
            const obj = {
            id: data.id,
            name: data.name,
            pokemons: pokemonsNames
            }
      
    if (!obj) throw new Error("Error getting data");
    return obj;
  };

module.exports = getData, getDataType;
