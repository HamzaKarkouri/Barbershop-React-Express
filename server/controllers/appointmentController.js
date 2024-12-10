const Appointment = require('../models/Appointment');

// Save a new appointment
exports.createAppointment = async (req, res) => {
    try {
        const { name, email, phone, date, service } = req.body;

        // Create and save the appointment
        const appointment = new Appointment({ name, email, phone, date, service });
        const savedAppointment = await appointment.save();

        res.status(201).json({ message: 'Appointment created successfully', appointment: savedAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create appointment', error: error.message });
    }
};



