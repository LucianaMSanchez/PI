const express = require("express");
const {
  deleteChampsHandler,
  addChampsHandler
} = require("../handlers/champsHandler")

const champsRouter = express.Router();


champsRouter.delete("/champs", deleteChampsHandler);
  
champsRouter.post("/champs", addChampsHandler);


module.exports = champsRouter; 