const { Pokemon} = require("../../db");


const addChamps = async (id) => 
await Pokemon.findByPk(id);


module.exports = addChamps;