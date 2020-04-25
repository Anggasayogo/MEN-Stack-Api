const dbConfig = require('../config/db.config');


const Sequilize = require('sequelize');
const sequelize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialec: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.min,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequilize = Sequilize;
db.sequilize = sequelize;

db.posts = require('./post.model.js')(sequelize.Sequilize);

module.exports = db;
