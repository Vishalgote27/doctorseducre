const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route for registering an admin
router.post('/register', adminController.registerAdmin);

// Route for logging in an admin
router.post('/login', adminController.loginAdmin);

module.exports = router;
