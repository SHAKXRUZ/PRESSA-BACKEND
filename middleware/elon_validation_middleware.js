import { elonValidation } from "../validation/elon_validation.js";

const elonlarValidation = function (req, res, next) {
  try {
    const { error } = elonValidation(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export { elonlarValidation };
