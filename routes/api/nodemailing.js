const nodemailer = require("nodemailer");
const axios = require("axios");
const email = require("../../config/keys").useremail;

const Mailing = async data => {
  // const Promise1 = new Promise((resolve, reject) => {
  //   resolve(Object.keys(data));
  // });
  // Promise1.then(async res => {
  const res = Object.keys(data);
  console.log(res);
  let liS = "";
  for (let i = 0; i < res.length; i++) {
    liS = liS + `<li>${res[i]}: ${data[res[i]]}</li>`;
  }
  const output = `<p>You have a a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
     ${liS}
    </ul>
    
    `;
  console.log(output);
  let transporter = nodemailer.createTransport({
    host: "mail.caravanoutdoors.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "paraskc@caravanoutdoors.com", // generated ethereal user
      pass: "P@ras1245" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <paraskc@caravanoutdoors.com>', // sender address
    // to: "sales@caravanoutdoors.com", // list of receivers
    to: email, // list of receivers
    subject: "New Inquiry", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);
  console.log("Mail Sent");
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // });
};

module.exports = Mailing;
