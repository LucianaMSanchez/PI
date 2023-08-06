const express = require("express");
const createOwnPokemon = require("../controllers/ownPokemonControllers/createOwnPokemon");
const getOwnPokemons = require("../controllers/ownPokemonControllers/getOwnPokemons");
const getOwnPokemonById = require("../controllers/ownPokemonControllers/getOwnPokemonById");
const getOwnPokemonByName = require("../controllers/ownPokemonControllers/getOwnPokemonByName.js");


const ownPokemonsRouter = express.Router();

ownPokemonsRouter.post("/", async (req, res) => {
    try {
        const {id, name, image, hitPoints, attack, defense, speed, height, weight, typesNames} = req.body;
        const newPokemon = await createOwnPokemon(id, name, image, hitPoints, attack, defense, speed, height, weight, typesNames);
        return res.status(200).json(newPokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});

ownPokemonsRouter.get("/", async (req, res) => {
    try {
      let {userId} = req.body;
      const pokemons = await getOwnPokemons(userId);
      return res.status(200).json(pokemons);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  });

ownPokemonsRouter.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await getOwnPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});

ownPokemonsRouter.get("/search", async (req, res) => {
    try {
        const {name} = req.query;
        const pokemon = await getOwnPokemonByName(name);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});


module.exports = ownPokemonsRouter;
