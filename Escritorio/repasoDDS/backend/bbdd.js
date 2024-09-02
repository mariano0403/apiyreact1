const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/Curso.db'
});

module.exports = sequelize;
