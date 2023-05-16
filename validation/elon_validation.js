import Joi from "joi";

const elonValidation = (data) => {
  const schema = Joi.object({
    sanaValue: Joi.string().required(),
    vaqtValue: Joi.string().required(),
    bulimValue: Joi.string().required(),
    ichkiBulimValue: Joi.string().required(),
    radioValue: Joi.string().required(),
    link: Joi.string().required(),
    ismsharif: Joi.string().required(),
    professiya: Joi.string().required(),
    telifon1: Joi.string().required(),
    telifon2: Joi.string().required(),
    description: Joi.string().required(),
    mavzumatni: Joi.string().required(),
    elon_img_url: Joi.string().required(),
  });

  return schema.validate(data);
};

export { elonValidation };
