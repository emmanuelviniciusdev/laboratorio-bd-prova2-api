const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'jogos_olimpicos',
    dialect: 'mysql',
})

module.exports = sequelize
