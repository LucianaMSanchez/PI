const { Type } = require("../../db")
const getDataType = require("../../utils/getData");
const axios = require("axios");

const Url = "https://pokeapi.co/api/v2/type"


const createType = async (name) => {
    
    const type = await axios
    .get(`${Url}/${name}`)
    .then((response) => response.data)
    .then((data) => getDataType(data))
    .catch((error) => {
      throw new Error(`Error fetching data: ${error.message}`);
    });

    const newType = await Type.create({
            id: type.id,
            name: type.name,
            pokemons: type.pokemons,
       })
      
    if (!newType) throw new Error("Error creating type");
    return newType;
  };

  module.exports = createType;