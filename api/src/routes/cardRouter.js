const express = require("express");
const closeCard = require("../controllers/cardControllers/closeCard");

const cardRouter = express.Router();

cardRouter.post("/", async (req, res) => {
    try {
        const { id, pokemons} = req.body;
        const pokemonsLeft = await closeCard(id, pokemons);
        return res.status(200).json(pokemonsLeft);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

module.exports = cardRouter;