const express = require("express");
const { closeCardHandler } = require("../handlers/cardHandler")

const cardRouter = express.Router();


cardRouter.post("/", closeCardHandler);

module.exports = cardRouter;