const getDataType = require("../../utils/getData");
const getTypeDB = require("../../utils/getTypeDB");
const axios = require("axios");

const Url = "https://pokeapi.co/api/v2/type"

const getTypeByName = async (name) =>{

  let foundType = await getTypeDB(name);
  
  if(!foundType){
      const newType = await axios
        .get(`${Url}/${name}`)
        .then((response) => response.data)
        .then((data) => getDataType(data))
        .catch((error) => {
          throw new Error(`Error fetching data: ${error.message}`);
        });
        foundType = newType;
      }
    
    if(!foundType) throw new Error (`There is no type named:${name}`)
    return foundType;
    };
  

  module.exports = getTypeByName;