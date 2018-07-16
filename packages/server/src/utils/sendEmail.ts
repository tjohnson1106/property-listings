import * as nodemailer from "nodemailer";

export const sendEmail = async (
  recipient: string,
  url: string,
  linkText: string
) => {
  //credentials
  //security issue 07162018
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "orim7visoctxzbou@ethereal.email",
      pass: "Xyyt6vgpJZFc2e8EaF"
    },
    tls: { rejectUnauthorized: false }
  });

  const message = {
    from: "Sender Name <sender@example.com>",
    to: `Recepient <${recipient}>`,
    subject: "Nodemailer is unicode friendly ✔",
    text: "Hello to myself!",
    html: `<html>
  <body>
  <p>Testing NodeMailer /p>
  <a href="${url}">${linkText}</a>
  </body>
  </html>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
    }

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log(
      "Preview URL: %s",
      nodemailer.getTestMessageUrl(info)
    );
  });
};
