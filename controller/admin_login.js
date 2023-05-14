// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import pool from "../config/db_config.js";
import dotenv from "dotenv";
dotenv.config();

const loginAdmin = async (req, res) => {
  try {
    const { admin, password } = req.body;

    let adminValidation =
      admin.trim() === ""
        ? res.status(401).send({ msg: "admin kiriting?" })
        : admin.trim();

    await pool.query(`INSERT INTO admin(admin, password) VALUES($1, $2)`, [
      adminValidation,
      password,
    ]);

    res.status(201).send({ msg: "Success admin!" });
  } catch {
    res.send({ msg: "Error" });
  }
};

export { loginAdmin };
