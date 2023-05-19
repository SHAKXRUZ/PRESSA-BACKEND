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

export { adminLogin };
