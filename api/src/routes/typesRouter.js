const express = require("express");
const {
    getTypesHandler,
    addTypesHandler,
    addPokeHandler,
    createTypeHandler,
    getTypeNameHandler
} = require("../handlers/typesHandler");

const typesRouter = express.Router();


typesRouter.get("/", getTypesHandler);

typesRouter.post("/addTypes", addTypesHandler);

typesRouter.post("/addPokemons", addPokeHandler);
  
typesRouter.post("/detail", createTypeHandler);
  
typesRouter.get("/search", getTypeNameHandler);


module.exports = typesRouter;