require("dotenv").config();

const transporterConfig = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  // secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  // tls: { rejectUnauthorized: false },
};
module.exports = { transporterConfig };
