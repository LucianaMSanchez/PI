const { Pokemon, Type } = require("../db")
const { Op } = require("sequelize");

const getTypeDB = async (name) =>{
    
    let foundType = await Type.findOne({
    where: { 
      name : {
        [Op.iLike]: `%${name}%`, 
      },
    },
    include: [
      {
        model: Pokemon,
        through: { attributes: [] }, 
      },
    ],
  });
  return foundType;
}

module.exports = getTypeDB;