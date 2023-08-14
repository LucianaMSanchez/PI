const { OwnPokemon, User } = require("../../db");

const createOwnPokemon = async (id, name, image, hitPoints, attack, defense, speed, height, weight, type1, type2, userId) => {
    const user = await User.findByPk(userId);
    const types = [type1, type2];

    const repeated = await OwnPokemon.findByPk(id);
    if (repeated) {
        throw new Error("This ID is already been used, choose another number");
    }

    const newPokemon = await OwnPokemon.create({
        id,
        name,
        image,
        hitPoints,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
    });

    if (!newPokemon) {
        throw new Error("Ooopss... you can't create this Pokémon");
    }

    await user.addOwnPokemon(newPokemon);

    return newPokemon; 
};

module.exports = createOwnPokemon;
