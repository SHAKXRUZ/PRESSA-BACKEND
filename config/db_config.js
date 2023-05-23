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

const { Sequelize, DataTypes,UUIDV4 } = require("sequelize");

const sequelize = new Sequelize({
  username: "postgres",
  database: "pressa",
  password: "20030625",
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

module.exports = {
  sequelize,
  UUIDV4,
  DataTypes,
};
