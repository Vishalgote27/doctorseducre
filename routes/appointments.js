// // routes/appointments.js

// const express = require('express');
// const router = express.Router();
// const { createAppointment } = require('../controllers/appointmentController');

// router.post('/', createAppointment);

// module.exports = router;



const express = require('express');
const router = express.Router();
const { createAppointment, getAllAppointments } = require('../controllers/appointmentController');

// POST route to create a new appointment
router.post('/', createAppointment);

// GET route to fetch all appointments
router.get('/', getAllAppointments);

module.exports = router;
