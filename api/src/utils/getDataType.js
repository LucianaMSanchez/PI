
const getDataType = async (data) => {

    const pokemonsNames = await data.pokemon.map((poke) => poke.pokemon.name);
    const doubleDF = await data.damage_relations.double_damage_from.map((el) => el.name);
    const doubleDT = await data.damage_relations.double_damage_to.map((el) => el.name);
    const halfDF = await data.damage_relations.half_damage_from.map((el) => el.name);
    const halfDT = await data.damage_relations.half_damage_to.map((el) => el.name);
    const noDF = await data.damage_relations.no_damage_from.map((el) => el.name);
    const noDT = await data.damage_relations.no_damage_to.map((el) => el.name);
     
             const obj = {
             id: data.id,
             name: data.name,
             pokemons: pokemonsNames,
             DDF: doubleDF,
             DDT: doubleDT,
             HDF: halfDF,
             HDT: halfDT,
             NDF: noDF,
             NDT: noDT,
             }
       
     if (!obj) throw new Error("Error getting data");
     return obj;
   };
 
 module.exports = getDataType;
 