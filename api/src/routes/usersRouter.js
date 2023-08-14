const express = require("express");
const { userValidation } = require("../middlewares/validations")
const {
  createUserHandler,
  loginHandler,
  getPokedexHandler,
  deletePokedexHandler,
  addPokedexHandler
} = require("../handlers/usersHandler")

const userRouter = express.Router();


userRouter.post("/create", userValidation, createUserHandler);

userRouter.post("/login", loginHandler);

userRouter.post("/pokedexFull", getPokedexHandler);
  
userRouter.delete("/pokedex", deletePokedexHandler);
  
  userRouter.post("/pokedex", addPokedexHandler);


module.exports = userRouter; 