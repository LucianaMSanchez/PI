const { User } = require("../../db")


const login = async (email, password) => {
  
    if (!email || !password) throw new Error("All fields must be completed");
    
    const userFound = await User.findOne({where: {email} }); 
      if (!userFound) throw new Error("User not found");
      if (userFound.password !== password) throw new Error('Wrong password');
      
      return (userFound.id);
  }
  
  module.exports = login;
  