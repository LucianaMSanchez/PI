const { User } = require("../../db")


const createUser = async (name, email, password) => {
  
    if (!name || !email || !password) throw new Error ( "All fields must been completed")
      
      const user = await User.findOne({ where: { email } });
      
      if(user) throw new Error ("User already exists!")
      return await User.create({ name, email, password });
    };
    

module.exports = createUser;