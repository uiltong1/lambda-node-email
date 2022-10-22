const Joi = require("joi");
const { messages } = require("joi-translation-pt-br");

const schema = Joi.object({
  email: Joi.string().email().required(),
  subject: Joi.string().required(),
  html: Joi.string().required(),
  bcc: Joi.array(),
});

const validation = async (data) => {
  try {
    await schema.validateAsync(data, { messages });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { validation };
