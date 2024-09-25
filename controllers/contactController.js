// const { sendEmail } = require('../models/emailModel');

// const contactFormHandler = async (req, res) => {
//   const { email, subject, message } = req.body;

//   if (!email || !subject || !message) {
//     return res.status(400).json({ success: false, message: 'All fields are required.' });
//   }

//   try {
//     const result = await sendEmail('gpratik9973@gmail.com', subject, `From: ${email}\n\n${message}`);

//     if (result.success) {
//       return res.status(200).json({ success: true, message: 'Email sent successfully.' });
//     } else {
//       return res.status(500).json({ success: false, message: 'Failed to send email.' });
//     }
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ success: false, message: 'Internal server error.', error: error.message });
//   }
// };

// module.exports = { contactFormHandler };




const { sendEmail } = require('../models/emailModel');

const contactFormHandler = async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // Send email to the administrator
    const adminResult = await sendEmail('gpratik9973@gmail.com', subject, `From: ${email}\n\n${message}`);

    if (adminResult.success) {
      // Send confirmation email to the user
      const userResult = await sendEmail(email, 'Thank you for contacting S-EDUCARE', '', true);

      if (userResult.success) {
        return res.status(200).json({ success: true, message: 'Email sent successfully.' });
      } else {
        return res.status(500).json({ success: false, message: 'Failed to send confirmation email.' });
      }
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send email to administrator.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Internal server error.', error: error.message });
  }
};

module.exports = { contactFormHandler };
