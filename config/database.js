const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME || 'codegig',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASS !== undefined ? process.env.DB_PASS : 'Password1',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres'
    }
);

