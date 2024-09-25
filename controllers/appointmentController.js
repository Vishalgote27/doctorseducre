// controllers/appointmentController.js

const Appointment = require('../models/Appointment');

// Handle POST request to create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, date, course, consultant, message } = req.body;

    if (!name || !email || !phone || !date || !course || !consultant) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      date,
      course,
      consultant,
      message,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handle GET request to fetch all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

