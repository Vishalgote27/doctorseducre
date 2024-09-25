// const nodemailer = require('nodemailer');

// const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS, // Use an App Password if 2FA is enabled
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return { success: true };
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return { success: false, error };
//   }
// };

// module.exports = { sendEmail };



const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text, isConfirmation = false) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use an App Password if 2FA is enabled
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  if (isConfirmation) {
    // Custom options for confirmation email
    mailOptions.subject = 'Thank you for contacting S-EDUCARE';
    mailOptions.text = `Thank you for reaching out to S-EDUCARE. We have received your message and will get back to you shortly. Stay happy, stay healthy!`;
  }

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

module.exports = { sendEmail };
