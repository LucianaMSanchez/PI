const express = require("express");
const { validation } = require("../middlewares/validations")
const {
    getOwnPokemonsHandler,
    getOwnPokemonByNameHandler,
    getOwnPokemonByIdHandler,
    createOwnPokemonHandler
} = require("../handlers/ownPokemonsHandler")

const ownPokemonsRouter = express.Router();


ownPokemonsRouter.post("/create", validation, createOwnPokemonHandler);

ownPokemonsRouter.post("/", getOwnPokemonsHandler);

ownPokemonsRouter.get("/search", getOwnPokemonByNameHandler);

ownPokemonsRouter.get("/:id", getOwnPokemonByIdHandler);


module.exports = ownPokemonsRouter;
