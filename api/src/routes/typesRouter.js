const express = require("express");
const getTypes = require("../controllers/typeControllers/getTypes");
const getTypeByName = require("../controllers/typeControllers/getTypeByName");
const addTypesToPokemon = require("../controllers/typeControllers/addTypesToPokemon");
const addPokemonsToType = require("../controllers/typeControllers/addPokemonsToType");
const createType = require("../controllers/typeControllers/createType");

const typesRouter = express.Router();

typesRouter.get("/", async (req, res) => {
    try {
      const types = await getTypes();
      return res.status(200).json(types);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  });

typesRouter.get("/addTypes", async (req, res) => {
  try {
    const {id}= req.body;
    const types = await addTypesToPokemon(id);
    return res.status(200).json(types);
  } catch (error) {
    return res.status(404).json({error: error.message})
    
  }
});

typesRouter.get("/addPokemons", async (req, res) => {
  try {
    const {name}= req.body;
    const pokemons = await addPokemonsToType(name);
    return res.status(200).json(pokemons);
  } catch (error) {
    return res.status(404).json({error: error.message})
    
  }
});
  
  
  typesRouter.post("/detail", async (req, res) => {
    try {
      const {name} = req.body;
      const type = await createType(name);
      return res.status(200).json(type);
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  });
  
  typesRouter.get("/search", async (req, res) => {
      try {
        const {name} = req.query;  
        const type = await getTypeByName(name);
        return res.status(200).json(type);    
      } catch (error) {
        return res.status(404).json({error: error.message})
      }
    });


module.exports = typesRouter;