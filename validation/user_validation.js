import Joi from "joi";

const adminLoginValidation = (data) => {
  const schema = Joi.object({
    admin: Joi.string().required(),
    password: Joi.string()
      .min(8)
      .max(50)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  return schema.validate(data);
};

export { adminLoginValidation };
