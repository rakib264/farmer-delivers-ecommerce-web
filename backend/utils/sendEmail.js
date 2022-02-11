const nodemailer = require('nodemailer');

const sendEmail = async options => {
  //Using MailTrap
  // .env file info for mailtrap

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      });

  // Using Gmail
   
// SMTP_SERVICE_NAME=Farmex Shop
// SMTP_SERVICE=gmail
// SMTP_SERVICE_USER=redwan.rakib264@gmail.com
// SMTP_SERVICE_PASSWORD=Lifeofpimovie@3900

  // const transporter = nodemailer.createTransport({
  //   service: process.env.SMTP_SERVICE,
  //   auth: {
  //     user: process.env.SMTP_SERVICE_USER,
  //     pass: process.env.SMTP_SERVICE_PASSWORD
  //   }
  // });

      const message = {
          from: `${process.env.SMTP_SERVICE_NAME} sent mail <${process.env.SMTP_EMAIL}>`,
          to: options.email,
          subject: options.subject,
          text: options.message
      }

    await transporter.sendMail(message)
}

module.exports = sendEmail;