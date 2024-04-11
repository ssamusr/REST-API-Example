const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')

const Product = connection.define('product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
},
  {
    timestamps: false
  })

module.exports = Product