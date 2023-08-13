const createOwnPokemon = require("../controllers/ownPokemonControllers/createOwnPokemon");
const getOwnPokemons = require("../controllers/ownPokemonControllers/getOwnPokemons");
const getOwnPokemonById = require("../controllers/ownPokemonControllers/getOwnPokemonById");
const getOwnPokemonByName = require("../controllers/ownPokemonControllers/getOwnPokemonByName");

const getOwnPokemonByNameHandler = async (req, res) => {
    try {
        const {name} = req.query;
        const pokemon = await getOwnPokemonByName(name);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

const getOwnPokemonsHandler = async (req, res) => {
    try {
        let {userId} = req.body;
        const pokemons = await getOwnPokemons(userId);
        return res.status(200).json(pokemons);    
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

const getOwnPokemonByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await getOwnPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

const createOwnPokemonHandler = async (req, res) => {
    try {
        const {id, name, image, hitPoints, attack, defense, speed, height, weight, type1, type2, userId} = req.body;
        const newPokemon = await createOwnPokemon(id, name, image, hitPoints, attack, defense, speed, height, weight, type1, type2, userId);
        return res.status(200).json(newPokemon);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};


module.exports = {
    getOwnPokemonsHandler,
    getOwnPokemonByNameHandler,
    getOwnPokemonByIdHandler,
    createOwnPokemonHandler
}