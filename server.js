const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const appointmentRoutes = require('./routes/appointments');
const contactRoutes = require('./routes/contactRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const getintouchRoutes = require('./routes/getintouchRoutes'); // Import the getintouch route

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/getintouch', getintouchRoutes); // Use the getintouch route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
