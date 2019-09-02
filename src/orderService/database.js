const Sequelize = require('sequelize');

const database = process.env.DATABASE_NAME || 'database_develop';
const username = process.env.DATABASE_USERNAME || 'root';
const password = process.env.DATABASE_PASSWORD || 'my-secret-pw';
const host = process.env.DATABASE_HOST || 'localhost';
const dialect = process.env.DATABASE_DIALECT || 'mysql';

const sequelize = new Sequelize(database, username, password, {
  // custom host; default: localhost
  host: host,
  
  // custom port; default: 3306
  port: 3307,

  dialect: dialect,

  dialectOptions: {
    insecureAuth: true
  }
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;