const deleteChamps = require("../controllers/champsControllers/deleteChamps");
const addChamps = require("../controllers/champsControllers/addChamps");


const deleteChampsHandler = async (req, res) => {
    try {
      let {id, champs} = req.body;
      const champsLeft = await deleteChamps(id, champs);
      return res.status(200).json(champsLeft);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  };

const addChampsHandler = async (req, res) =>{
    try {
      let {id} = req.body;
      const champToAdd = await addChamps(id);
      return res.status(200).json(champToAdd);    
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  };

  module.exports = {
    deleteChampsHandler,
    addChampsHandler
  }