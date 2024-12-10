const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./routes/appointmentRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/appointments', appointmentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;
