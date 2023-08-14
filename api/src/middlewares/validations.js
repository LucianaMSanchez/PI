const validation = (req, res, next) => {
    const {id, name, image, hitPoints, attack, defense, speed, height, weight, type1, type2} = req.body;
    if (!id || !name || !image || !hitPoints || !attack || !defense || !speed || !height || !weight || !type1 || !type2)
    return res.status(404).json({error: "All fields must be completed"});

    next();

};

const userValidation = (req, res, next) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) 
    return res.status(404).json({error: "All fields must be completed"});

    next();
};


module.exports = {validation, userValidation};