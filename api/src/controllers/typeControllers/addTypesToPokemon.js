const { Type, Pokemon } = require("../../db");

const addTypesToPokemon = async (id) => {
    const pokemon = await Pokemon.findByPk(id)
   
    if(!pokemon.types) throw new Error ("No types related to this pokemon")
    for (const typeName of pokemon.types) {
        const foundType = await Type.findOne({
            where: { 
              name : {
                [Op.iLike]: `%${typeName}%`, 
              },
            },
         })
        if(!foundType)throw new Error ("We couldn't find types related to this pokemon")
        await pokemon.addTypes(foundType);
    }
    const types = await pokemon.getTypes();
    return types;
  }

  module.exports = addTypesToPokemon;