// import pg from "pg";
// import dotenv from "dotenv";
// dotenv.config();

// const { Pool } = pg;

// const pool = new Pool({
//   user: process.env.DATABASE,
//   host: process.env.DATABASE_HOST,
//   database: process.env.DATABASE_NAME,
//   password: process.env.DATABASE_PASSWORD,
//   port: process.env.DATABASE_PORT,
// });

// export default pool;

const { Sequelize, DataTypes, UUIDV4 } = require("sequelize");
require('dotenv/config')

const sequelize = new Sequelize(process.env.ELEPHANTSQLURL);
sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

module.exports = {
  sequelize,
  UUIDV4,
  DataTypes,
};
