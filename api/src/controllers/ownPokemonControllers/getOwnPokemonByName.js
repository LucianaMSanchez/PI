const { User, Type } = require("../../db")


  const getOwnPokemonByName = async (name, userId) =>{
    
    const user = await User.findByPk(userId);
    const ownPokemon = await user.getOwnPokemons({
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
    
    if(!ownPokemon) throw new Error(`There is no pokemon named:${name}`)
    return ownPokemon;
  }


module.exports = getOwnPokemonByName;


