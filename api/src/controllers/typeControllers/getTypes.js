const axios = require("axios");


const getTypes = async () =>{


    const {data} = await axios("https://pokeapi.co/api/v2/type");
    
      const promises = await data.results.map(async (type) => {
      const typeId = parseInt(type.url.split("/").at(-2));
  
        const newType = {
                id: typeId,
                name: type.name,
          }
          return newType
        })
      const types = await Promise.all(promises);
      if (!types) throw new Error("Type not found");
      return types;
    }


  module.exports = getTypes;



