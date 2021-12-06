const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env variables
dotenv.config({path: './config/config.env'});

// DB connection
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const { connect } = require('mongoose');

const app = express();

// Express body parser
app.use(express.json());

// Middleware for logging
app.use(logger)

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

//Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    // Close server and exit process
    server.close(() => process.exit(1));
});
