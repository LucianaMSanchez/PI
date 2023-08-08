const { Type } = require("../../db")
const getDataType = require("../../utils/getDataType");
const getTypeDB = require("../../utils/getTypeDB");
const axios = require("axios");

const Url = "https://pokeapi.co/api/v2/type"


const createType = async (name) => {
    
  let foundType = await getTypeDB(name);
  
  if(!foundType){
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
            DDF: type.DDF,
            DDT: type.DDT,
            HDF: type.HDF,
            HDT: type.HDT,
            NDF: type.NDF,
            NDT: type.NDT,
       })
      
    if (!newType) throw new Error("Error creating type");
    return newType;
      } else {
        return foundType;
      }
  };

  module.exports = createType;