const User = require('../models/user.model');
const adminMiddleware = require('../middleware/admin.middleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  transporter,
  activateUserTemplate,
  registerUserTemplate,
} = require('../middleware/email.template');
const shortid = require('shortid');
const { errorHandler } = require('../helpers/dbErrorHandler');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

exports.preSignup = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = User.findOne(
    { email: email.toLowerCase() },
    async (err, user) => {
      if (user) {
        return res.status(400).json({
          error: 'Email is taken',
        });
      }
      const usr = { name, email, password };
      const token = jwt.sign(usr, process.env.JWT_REGISTER, {
        expiresIn: '10m',
      });

      try {
        const sendEmail = () => {
          transporter.sendMail(
            activateUserTemplate(usr, token),
            (err, info) => {
              if (err) {
                console.log(err);
                res.status(500).send({ err: 'Error sending email' });
              } else {
                console.log(`** Email sent **`, info);
              }
            }
          );
        };
        sendEmail();
        res.status(200).json({ msg: 'Email sent, activate account' });
      } catch (err) {
        console.log(err);
      }
    }
  );
};

exports.SignUp = async (req, res) => {
  const { token } = req.body;

  jwt.verify(token, process.env.JWT_REGISTER, (err, decode) => {
    if (err)
      return res.status(401).json({ error: 'Expired link, Signup again' });
  });

  const { name, email, password } = jwt.decode(token);

  // creating username and profile
  const username = shortid.generate();
  const profile = `${process.env.CLIENT_URL}/profile/${username}`;
  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    profile,
    username,
  });

  newUser.save((err, user) => {
    if (err) return res.status(401).json({ error: errorHandler(err) });
    return res
      .status(200)
      .json({ message: 'Signup success!, you can now sign in' });
  });
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email }).exec((err, user) => {
    if (err || !user)
      return res.status(400).json({ error: 'This user does not exist' });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(400).json({ error: 'Invalid Password' });
    });

    //generate new token for users
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, { expiresIn: '1d' });
    const { _id, username, name, email, role } = user;
    return res.status(200).json({
      token,
      user: { _id, username, name, email, role },
    });
  });
};
