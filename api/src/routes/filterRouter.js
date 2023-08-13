const express = require("express");
const {
    filterTypeHandler, 
    orderAzHandler,
    orderHpHandler, 
    orderAttackHandler,
    orderDefenseHandler,
    orderSpeedHandler,
    filterOriginHandler
} = require("../handlers/filterHandler")

const filterRouter = express.Router();

filterRouter.post("/type", filterTypeHandler);

filterRouter.post("/Az", orderAzHandler);

filterRouter.post("/hitPoints", orderHpHandler);

filterRouter.post("/attack", orderAttackHandler);

filterRouter.post("/defense", orderDefenseHandler);

filterRouter.post("/speed", orderSpeedHandler);

filterRouter.post("/origin", filterOriginHandler);


module.exports = filterRouter;
