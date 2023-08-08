const { Type, Pokemon } = require("../../db");
const createType = require("./createType");
const { Op } = require("sequelize");

const addTypesToPokemon = async (id) => {
   
        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            throw new Error(`Pokemon with ID ${id} not found`);
        }

        if (!pokemon.types || pokemon.types.length === 0) {
            throw new Error(`No types related to this Pokémon`);
        }

        for (const typeName of pokemon.types) {
            let foundType = await Type.findOne({
                where: { 
                    name: {
                        [Op.iLike]: `%${typeName}%`, 
                    },
                },
            });

            if (!foundType) {
                console.warn(`Type "${typeName}" not found in the database, creating...`);
                foundType = await createType(typeName);
            }

            await pokemon.addTypes(foundType);
        }

        const typesRelated = await pokemon.getTypes();
        return typesRelated;
 
};

module.exports = addTypesToPokemon;
