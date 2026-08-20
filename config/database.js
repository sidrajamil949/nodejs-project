const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    'codegig',
    'postgres',
    'abcd',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
