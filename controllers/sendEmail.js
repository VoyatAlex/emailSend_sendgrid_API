const sgMail = require('@sendgrid/mail');
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'bogdanlinee2@gmail.com',
    from: 'bogdanlinee@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  const info = await sgMail.send(msg);
  res.status(200).send('send email');
}

module.exports = sendEmail;