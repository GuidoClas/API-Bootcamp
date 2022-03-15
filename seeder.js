const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');

// Load Environment variables
dotenv.config( { path: './config/config.env' } );

// Load models
const Bootcamp = require('./models/Bootcamp');

// DB connection
const connectDB = require('./config/db');
connectDB();

// Read JSON files
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);
        console.log('Data imported successfully'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

// Delete from DB
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();
        console.log('Data deleted successfully'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

if(process.argv[2] === '-i'){
    importData();
} else if(process.argv[2] === '-d'){
    deleteData();
}