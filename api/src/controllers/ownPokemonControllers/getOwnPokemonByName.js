const { OwnPokemon, Type } = require("../../db")
const { Op } = require("sequelize");

  const getOwnPokemonByName = async (name) =>{
    
    let ownPoke = await OwnPokemon.findOne({
      where: { 
        name : {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Type,
          through: { attributes: [] }, 
        },
      ],
    });
   
    if(!ownPoke) throw new Error(`No Own pokémons named: ${name}`)
    return ownPoke;
  }


module.exports = getOwnPokemonByName;

