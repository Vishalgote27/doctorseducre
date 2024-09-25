const mongoose = require('mongoose');

// Define the schema
const getintouchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
});

// Create and export the model
const GetInTouch = mongoose.model('GetInTouch', getintouchSchema);

module.exports = GetInTouch;
