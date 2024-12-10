const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');

const router = express.Router();

// Route to create a new appointment
router.post('/appointments', createAppointment);

module.exports = router;
