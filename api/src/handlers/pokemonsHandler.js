const getPokemons = require("../controllers/pokemonControllers/getPokemons");
const getRandomPokemons = require("../controllers/pokemonControllers/getRandomPokemons");
const getPokemonById = require("../controllers/pokemonControllers/getPokemonById");
const getPokemonByName = require("../controllers/pokemonControllers/getPokemonByName.js");
const createPokemon = require("../controllers/pokemonControllers/createPokemon.js");


const createPokemonHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await createPokemon(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

const getPokemonByNameHandler = async (req, res) => {
    try {
        const {name} = req.query;
        const pokemon = await getPokemonByName(name);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

const getPokemonsHandler = async (req, res) => {
    try {
      const pokemons = await getPokemons();  
      return res.status(200).json(pokemons);    
    } catch (error) {
      return res.status(404).json({error: error.message})  
    }  
};

const getRandomPokemonsHandler = async (req, res) => {
    try {
      const randomPokemons = await getRandomPokemons();  
      return res.status(200).json(randomPokemons);    
    } catch (error) {
      return res.status(404).json({error: error.message})  
    }  
}; 

const getPokemonByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await getPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

module.exports = {
    createPokemonHandler,
    getPokemonByNameHandler,
    getPokemonsHandler,
    getRandomPokemonsHandler,
    getPokemonByIdHandler
}