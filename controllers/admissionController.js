// controllers/admissionController.js
const AdmissionForm = require('../models/AdmissionForm');

const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // Create a new form entry
    const newForm = new AdmissionForm(formData);
    
    // Save the entry to the database
    await newForm.save();

    // Send success response
    res.status(200).json({ success: true, message: 'Form submitted successfully.' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'Failed to submit form.' });
  }
};

const getAllForms = async (req, res) => {
  try {
    // Fetch all form entries from the database
    const forms = await AdmissionForm.find({});
    
    // Send success response with data
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    console.error('Error fetching forms:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch forms.' });
  }
};

const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Fetch a specific form entry by ID
    const form = await AdmissionForm.findById(id);
    
    if (!form) {
      return res.status(404).json({ success: false, message: 'Form not found.' });
    }
    
    // Send success response with data
    res.status(200).json({ success: true, data: form });
  } catch (error) {
    console.error('Error fetching form:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch form.' });
  }
};

module.exports = { submitForm, getAllForms, getFormById };
