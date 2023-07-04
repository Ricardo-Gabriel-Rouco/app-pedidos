const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('products', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    productKey: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pricePerPack: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    pricePerUnit: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  })
}