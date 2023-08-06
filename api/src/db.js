require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   { logging: false, native: false }
);

const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });


modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


const { Pokemon, Type, User, OwnPokemon } = sequelize.models;

Pokemon.belongsToMany(Type,{through: "pokemon_type"});
Type.belongsToMany(Pokemon,{through: "pokemon_type"});

Pokemon.belongsToMany(User,{through: "user_pokedex"});
User.belongsToMany(Pokemon,{through: "user_pokedex"});

OwnPokemon.belongsToMany(User,{through: "own_pokemon"});
User.belongsToMany(OwnPokemon,{through: "own_pokemon"});

OwnPokemon.belongsToMany(Type,{through: "ownPokemon_type"});
Type.belongsToMany(OwnPokemon,{through: "ownPokemon_type"});

module.exports = {
   ...sequelize.models, 
   conn: sequelize, 
};
