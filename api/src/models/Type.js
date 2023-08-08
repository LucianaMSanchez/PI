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
   DDF: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   },
   DDT: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   },
   HDF: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   },
   HDT: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   },
   NDF: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   },
   NDT: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   },
   pokemons: {
      type: DataTypes.ARRAY(DataTypes.STRING),
   }
}, { timestamps: false });
};
