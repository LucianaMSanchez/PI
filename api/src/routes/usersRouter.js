const express = require("express");
const {
  createUserHandler,
  loginHandler,
  getPokedexHandler,
  deletePokedexHandler,
  addPokedexHandler
} = require("../handlers/usersHandler")

const userRouter = express.Router();


userRouter.post("/create", createUserHandler);

userRouter.post("/login", loginHandler);

userRouter.post("/pokedexFull", getPokedexHandler);
  
userRouter.delete("/pokedex", deletePokedexHandler);
  
  userRouter.post("/pokedex", addPokedexHandler);


module.exports = userRouter; 