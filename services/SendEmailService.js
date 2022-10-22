const nodemailer = require("nodemailer");
const { transporterConfig } = require("../config/NodeMailerConfig");

const handle = async ({ email, subject, html, bcc }) => {
  try {
    const transporter = nodemailer.createTransport(transporterConfig);
    await transporter.sendMail({
      to: email,
      subject,
      html,
      bcc
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { handle };
