const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   image: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   hitPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   defense: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  speed: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
   types: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      },
}, { timestamps: false });
};
