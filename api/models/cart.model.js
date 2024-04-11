const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')

const Cart = connection.define('cart', {
  quantity: {
    type: DataTypes.INTEGER,
  },
},
  {
    timestamps: false
  })

module.exports = Cart