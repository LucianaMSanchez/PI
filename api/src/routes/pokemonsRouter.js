const express = require("express");
const getPokemons = require("../controllers/pokemonControllers/getPokemons");
const getPokemonById = require("../controllers/pokemonControllers/getPokemonById");
const getPokemonByName = require("../controllers/pokemonControllers/getPokemonByName.js");
const createPokemon = require("../controllers/pokemonControllers/createPokemon.js");


const pokemonsRouter = express.Router();


pokemonsRouter.post("/detail/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await createPokemon(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});    

pokemonsRouter.get("/search", async (req, res) => {
    try {
        const {name} = req.query;
        const pokemon = await getPokemonByName(name);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});

pokemonsRouter.get("/", async (req, res) => {
    try {
      const pokemons = await getPokemons();  
      return res.status(200).json(pokemons);    
    } catch (error) {
      return res.status(404).json({error: error.message})  
    }  
});    


pokemonsRouter.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await getPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});



module.exports = pokemonsRouter;