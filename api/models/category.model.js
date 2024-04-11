const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')

const Category = connection.define('category', {
  categoryName: {
    type: DataTypes.STRING,
  },
},
  {
    timestamps: false
  })

module.exports = Category