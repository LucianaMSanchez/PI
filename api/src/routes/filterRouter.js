const express = require("express");
const filterType = require("../controllers/filterControllers/filterType");
const orderAz = require("../controllers/filterControllers/orderAz");
const orderHp = require("../controllers/filterControllers/orderHp");
const orderAttack = require("../controllers/filterControllers/orderAttack");
const orderDefense = require("../controllers/filterControllers/orderDefense");
const orderSpeed = require("../controllers/filterControllers/orderSpeed");
const filterOrigin = require("../controllers/filterControllers/filterOrigin");

const filterRouter = express.Router();

filterRouter.post("/type", async (req, res) => {
    try {
        const { type, filterPokemons} = req.body;
        const filteredPokemons = await filterType(type, filterPokemons);
        return res.status(200).json(filteredPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

filterRouter.post("/Az", async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderAz(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

filterRouter.post("/hitPoints", async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderHp(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

filterRouter.post("/attack", async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderAttack(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

filterRouter.post("/defense", async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderDefense(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

filterRouter.post("/speed", async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderSpeed(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});

filterRouter.post("/origin", async (req, res) => {
    try {
        const { origin, filterPokemons} = req.body;
        const originPokemons = await filterOrigin(origin, filterPokemons);
        return res.status(200).json(originPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});


module.exports = filterRouter;
