const { Type, Pokemon } = require("../../db");
const { Op } = require("sequelize");

const addPokemonsToType = async (name) => {
    
        const type = await Type.findOne({
            where: { 
                name: {
                    [Op.iLike]: `%${name}%`, 
                },
            },
        });

        if (!type) {
            throw new Error(`Type with name "${name}" not found`);
        }

        if (!type.pokemons) {
            throw new Error(`No pokemons related to this type`);
        }

        for (const pokemon of type.pokemons) {
            const foundPokemon = await Pokemon.findOne({
                where: { 
                    name: {
                        [Op.iLike]: `%${pokemon}%`, 
                    },
                },
            });

            if (!foundPokemon) {
                console.warn(`Pokemon "${pokemon}" not found in the database`);
                continue;
            }

            await type.addPokemons(foundPokemon);
        }

        const pokemonsRelated = await type.getPokemons();
        return pokemonsRelated;
 
};

module.exports = addPokemonsToType;
