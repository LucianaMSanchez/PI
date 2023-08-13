const { Pokemon} = require("../../db");

const addChamps = async (id) => {

    let champ = await Pokemon.findByPk(id);
    
    if(!champ) throw new Error("You can't add this champ!");

    return champ;
};


module.exports = addChamps;