const GetInTouch = require('../models/getintouchModel');

// Controller to handle form submissions
const createGetInTouch = async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const newGetInTouch = new GetInTouch({ name, phone, email, subject, message });
    await newGetInTouch.save();
    res.status(200).json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Internal server error.', error: error.message });
  }
};

module.exports = { createGetInTouch };
