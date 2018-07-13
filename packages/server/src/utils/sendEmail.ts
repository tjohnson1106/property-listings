import * as SparkPost from "sparkpost";
const client = new SparkPost(process.env.SPARKPOST_API_KEY);

export const sendEmail = async (recipient: string, url: string) => {
  const response = await client.transmissions.send({
    options: {
      sandbox: true
    },
    content: {
      from: "testing@sparkpostbox.com",
      subject: "Confirm Email",
      html: `<html>
        <body>
        <p>Testing SparkPost - the world's most awesomest email service!</p>
        <a href="${url}">confirm email</a>
        </body>
        </html>`
    },
    recipients: [{ address: recipient }]
  });
  console.log(response);
};

import * as nodemailer from "nodemailer";

//credentials
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "fozn67fxhjcotlyo@ethereal.email",
    pass: "x53xFd5pqUJwJvHW7p"
  }
});

// Message object
let message = {
  from: "Sender Name <sender@example.com>",
  to: "Recipient <recipient@example.com>",
  subject: "Nodemailer is unicode friendly ✔",
  text: "Hello to myself!",
  html: "<p><b>Hello</b> to myself!</p>"
};

transporter.sendMail(message, (err, info) => {
  if (err) {
    console.log("Error occurred. " + err.message);
    return process.exit(1);
  }

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
