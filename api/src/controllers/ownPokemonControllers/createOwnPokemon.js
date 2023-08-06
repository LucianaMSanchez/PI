const { OwnPokemon, User } = require("../../db")

const createOwnPokemon = async (id, name, image, hitPoints, attack, defense, speed, height, weight, types, userId) => {
    const user = await User.findByPk(userId);

    if(!id || !name || !image || !hitPoints || !attack || !defense || !speed || !height || !weight || !types){
        throw new Error ("All fields must be completed")
    }
    const newPokemon = await OwnPokemon.create({
            id,
            name,
            image,
            hitPoints,
            attack,
            defense,
            speed,
            height,
            weight,
            types,
       })
      
    if (!newPokemon) throw new Error("Ooopss... you can't create this pokemon");
    await user.addPokemon(newPokemon) 
    return newPokemon;
  }


module.exports = createOwnPokemon;


