import {
  adminLoginValidation,
} from "../validation/user_validation.js";


const adminLogiValidation = function (req, res, next) {
  try {
    const { error } = adminLoginValidation(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};



export { adminLogiValidation };
