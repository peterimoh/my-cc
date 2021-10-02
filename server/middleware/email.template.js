const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
})

const activateUserTemplate = (usr, token) => {
  // const { user } = User;
  // console.log(usr, token);
  const from = process.env.EMAIL;
  const to = usr.email;
  const subject = '🍀 Account Activation 🍀';
  const html = `
  <p>Dear, ${usr.name} </p>
  <p>Thank you for registering on my blog, to be your coding companion and share ideas. </p>
  <h4>Please use the following link to activate your account: </h4>
  <p>localhost:${process.env.PORT}/auth/account/activate/${token}</p>
  or <a href='localhost:${process.env.PORT}/api/signup/${token}'>click here to activate</a>
  <p>Best regards,</p>
  <p>Your friend, Peter Imoh Victor🍀</p>
  <center></center><img style='margin: 0 auto !important' src="https://res.cloudinary.com/imoh-peter/image/upload/v1631548067/logohd_vtbvm1.png" alt="logo" width="100" height="100" ></center>
  `;

  return { from, to, subject, html };
};


const registerUserTemplate = (user) => {
  const from = process.env.EMAIL;
  const to = user.email;
  const subject = "🍀 Account Registration Successful 🍀";
  const html = `
  <p>Dear, ${user.name} </p>
  <p>Thank you for registering on my blog, to be your coding companion and share ideas. </p>
  <p>Your username is: ${user.email} </p>
  <p>If you have any questions please contact support</p>
  <p>Best regards,</p>
  <p>Your friend, Peter Imoh Victor🍀</p>
  <img src="https://res.cloudinary.com/imoh-peter/image/upload/v1631548067/logohd_vtbvm1.png" alt="logo" width="500" height="60" > 
  `;

  return { from, to, subject, html };
};

module.exports = {transporter,activateUserTemplate, registerUserTemplate}