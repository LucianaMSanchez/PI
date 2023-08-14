const express = require("express");
const {
    createPokemonHandler,
    getPokemonByNameHandler,
    getPokemonsHandler,
    getRandomPokemonsHandler,
    getPokemonByIdHandler
} = require("../handlers/pokemonsHandler");

const pokemonsRouter = express.Router();


pokemonsRouter.get("/detail/:id", createPokemonHandler);    

pokemonsRouter.get("/search", getPokemonByNameHandler);

pokemonsRouter.get("/", getPokemonsHandler);    

pokemonsRouter.post("/random", getRandomPokemonsHandler);    

pokemonsRouter.get("/:id", getPokemonByIdHandler);



module.exports = pokemonsRouter;