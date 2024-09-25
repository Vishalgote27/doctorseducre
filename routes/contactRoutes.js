const express = require('express');
const router = express.Router();
const { contactFormHandler } = require('../controllers/contactController');

// Route to handle contact form submissions
router.post('/', contactFormHandler);

module.exports = router;
    