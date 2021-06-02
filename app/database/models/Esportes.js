const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Esportes = sequelize.define('esportes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    modalidade: DataTypes.STRING,
    tipo: DataTypes.STRING,
    distancia: DataTypes.FLOAT,
    sexo: DataTypes.STRING,
    local: DataTypes.STRING,
})

module.exports = Esportes
