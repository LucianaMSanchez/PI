const filterType = require("../controllers/filterControllers/filterType");
const orderAz = require("../controllers/filterControllers/orderAz");
const orderHp = require("../controllers/filterControllers/orderHp");
const orderAttack = require("../controllers/filterControllers/orderAttack");
const orderDefense = require("../controllers/filterControllers/orderDefense");
const orderSpeed = require("../controllers/filterControllers/orderSpeed");
const filterOrigin = require("../controllers/filterControllers/filterOrigin");


const filterTypeHandler = async (req, res) => {
    try {
        const { type, allPokemons} = req.body;
        const filteredPokemons = await filterType(type, allPokemons);
        return res.status(200).json(filteredPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

const orderAzHandler = async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderAz(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

const orderHpHandler = async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderHp(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

const orderAttackHandler =  async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderAttack(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

const orderDefenseHandler = async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderDefense(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

const orderSpeedHandler = async (req, res) => {
    try {
        const { order, pokemons} = req.body;
        const orderedPokemons = await orderSpeed(order, pokemons);
        return res.status(200).json(orderedPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

const filterOriginHandler = async (req, res) => {
    try {
        const { origin, allPokemons} = req.body;
        const originPokemons = await filterOrigin(origin, allPokemons);
        return res.status(200).json(originPokemons);   
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = {
    filterTypeHandler, 
    orderAzHandler, 
    orderHpHandler, 
    orderAttackHandler,
    orderDefenseHandler,
    orderSpeedHandler,
    filterOriginHandler
}

