const { validation } = require("./validation/validationParams");
const SendEmailService = require("./services/SendEmailService");

module.exports.main = async (event) => {
  try {
    await validation(event);
    await SendEmailService.handle(event);
    return {
      statusCode: 200,
      message: "Email enviado com sucesso!",
    };
  } catch (error) {
    return {
      statusCode: 400,
      message: error.message,
    };
  }
};
