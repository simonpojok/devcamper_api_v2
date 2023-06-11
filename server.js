const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to database

connectDB();

// Routes files

const bootcamps = require('./routes/bootcamps');


const app = express();

// Body parser

app.use(express.json());

// Dev logging middleware

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(5000, (req, res) => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.italic);
});
