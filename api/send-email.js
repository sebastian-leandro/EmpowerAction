const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'santiago@empoweraction.network',
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};