// routes/admissionRoutes.js
const express = require('express');
const router = express.Router();
const { submitForm, getAllForms, getFormById } = require('../controllers/admissionController');

router.post('/submit', submitForm);
router.get('/forms', getAllForms); // Route to get all forms
router.get('/forms/:id', getFormById); // Route to get a form by ID

module.exports = router;
