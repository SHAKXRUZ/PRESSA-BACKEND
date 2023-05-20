import pool from "../config/db_config.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const adminLogin = async (req, res) => {
  try {
    const { adminname, password } = req.body;

    if (adminname !== process.env.ADMIN_LOGIN_KEY) {
      return res.status(201).send({ msg: "Invalid login!" });
    } else if (password !== process.env.ADMIN_LOGIN_PASSWORD) {
      return res.status(201).send({ msg: "Password error!" });
    }

    let token = jwt.sign(
      {
        name: process.env.ADMIN_LOGIN_KEY,
        password: process.env.ADMIN_LOGIN_PASSWORD,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.JWT_TIME,
      }
    );

    res.status(201).send({ msg: "Success!", token });
  } catch {
    res.send({ msg: "Error" });
  }
};

const qabulQilinganBekor = async (req, res) => {
  try {
    const { id } = req.body;

    await pool.query(
      `update elon set tasdiqlangan = $1 where id = $2
      `,
      [false, id]
    );

    return res.status(201).send({ msg: "Elon bekor qilindi!" });
  } catch {
    res.send({ msg: "Error" });
  }
};

const kutilmoqdaElon = async (req, res) => {
  try {
    const { id } = req.body;

    await pool.query(
      `update elon set tasdiqlangan = $1 where id = $2
      `,
      [true, id]
    );

    return res.status(201).send({ msg: "Elon qabul qilindi!" });
  } catch {
    res.send({ msg: "Error" });
  }
};

const adminSearch = async (req, res) => {
  try {
    const { adminSearch } = req.body;

    let searchToLowerCase = adminSearch.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await pool.query(
      "select * from elon where ismsharif = $1",
      [searchValidation]
    );

    let objVaqt = await pool.query("select * from elon where vaqt = $1", [
      searchValidation,
    ]);

    let objSana = await pool.query("select * from elon where sana = $1", [
      searchValidation,
    ]);

    let objOnline = await pool.query(
      "select * from elon where tadbir_turi = $1",
      [searchValidation]
    );

    let objYunalish = await pool.query(
      "select * from elon where yunalish = $1",
      [searchValidation]
    );

    if (
      !objVaqt.rows[0] &&
      !objSana.rows[0] &&
      !objOnline.rows[0] &&
      !objYunalish.rows[0]
    ) {
      return res.status(201).send(objIsmsharif.rows);
    } else if (
      !objIsmsharif.rows[0] &&
      !objSana.rows[0] &&
      !objOnline.rows[0] &&
      !objYunalish.rows[0]
    ) {
      return res.status(201).send(objVaqt.rows);
    } else if (
      !objIsmsharif.rows[0] &&
      !objVaqt.rows[0] &&
      !objOnline.rows[0] &&
      !objYunalish.rows[0]
    ) {
      return res.status(201).send(objSana.rows);
    } else if (
      !objIsmsharif.rows[0] &&
      !objVaqt.rows[0] &&
      !objSana.rows[0] &&
      !objYunalish.rows[0]
    ) {
      return res.status(201).send(objOnline.rows);
    } else if (
      !objIsmsharif.rows[0] &&
      !objVaqt.rows[0] &&
      !objSana.rows[0] &&
      !objOnline.rows[0]
    ) {
      return res.status(201).send(objYunalish.rows);
    }
  } catch {
    res.send({ msg: "Error" });
  }
};

export { adminLogin, qabulQilinganBekor, kutilmoqdaElon, adminSearch };
