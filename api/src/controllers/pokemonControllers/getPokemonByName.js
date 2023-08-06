const { Pokemon, Type } = require("../../db")
const { Op } = require("sequelize");
const getData = require("../../utils/getData");
const axios = require("axios");

const Url = "https://pokeapi.co/api/v2/pokemon";

const getPokemonByName = async (name) =>{

    let foundPokemon = await Pokemon.findOne({
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
 
    if(!foundPokemon){
      const newpokemon = await axios
        .get(`${Url}/${name}`)
        .then((response) => response.data)
        .then((data) => getData(data))
        .catch((error) => {
          throw new Error(`Error fetching data: ${error.message}`);
        });
        foundPokemon = newpokemon;
      }
    
    if(!foundPokemon) throw new Error (`There is no pokemon with id:${id}`)
    return foundPokemon;
    };
      

  module.exports = getPokemonByName;