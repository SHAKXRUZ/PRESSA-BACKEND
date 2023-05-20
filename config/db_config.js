import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool(process.env.ELEPHANTSQL_URL);

export default pool;
