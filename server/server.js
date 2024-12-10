const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors());

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const appointmentRouter = require('./routes/appointmentRoutes.js');

app.use(express.json());


app.use('/api', appointmentRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});