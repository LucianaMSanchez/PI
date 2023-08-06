const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   pokemons: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   }
}, { timestamps: false });
};
