const express = require("express");
const createUser = require("../controllers/userControllers/createUser");
const login = require("../controllers/userControllers/loginUser");
const getPokedex = require("../controllers/userControllers/getPokedex");
const deletePokedex = require("../controllers/userControllers/deletePokedex");
const addPokedex = require("../controllers/userControllers/addPokedex");

const userRouter = express.Router();

userRouter.post("/create", async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const newUser = await createUser(name, email, password);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(404).json({error: error.message})
       
    }
});

userRouter.post("/login", async (req, res) =>{
    try {
        const { email, password }= req.body;
        const userId = await login(email, password);
        return res.status(200).json(userId)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
});

userRouter.get("/pokedex", async (req, res) => {
    try {
      let {userId} = req.body;
      const pokedex = await getPokedex(userId);
      return res.status(200).json(pokedex);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  });
  
userRouter.delete("/pokedex", async (req, res) => {
    try {
      let {id, userId} = req.body;
      const pokedex = await deletePokedex(id, userId);
      return res.status(200).json(pokedex);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  });
  
  userRouter.post("/pokedex", async (req, res) =>{
    try {
      let {id, userId} = req.body;
      const pokedex = await addPokedex(id, userId);
      return res.status(200).json(pokedex);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  })


module.exports = userRouter; 