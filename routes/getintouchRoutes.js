const express = require('express');
const router = express.Router();
const { createGetInTouch } = require('../controllers/getintouchController');

// Route to handle form submissions
router.post('/', createGetInTouch);

module.exports = router;
