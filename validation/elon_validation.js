import Joi from "joi";

const elonValidation = (data) => {
  const schema = Joi.object({
    sana: Joi.string().required(),
    vaqt: Joi.string().required(),
    yunalish: Joi.string().required(),
    ichki_yunalish: Joi.string().required(),
    tadbir_turi: Joi.string().required(),
    link: Joi.string().required(),
    ismsharif: Joi.string().required(),
    professiya: Joi.string().required(),
    telifon1: Joi.string().required(),
    telifon2: Joi.string().required(),
    elon_description: Joi.string().required(),
    mavzumatni: Joi.string().required(),
    img_url: Joi.string().required(),
  });

  return schema.validate(data);
};

export { elonValidation };
