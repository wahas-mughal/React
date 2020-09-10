const path = require('path'); // import path module to make routing easier in production
const express = require('express'); //import express
const dotenv = require('dotenv'); //import dotenv (global variables) modules
const colors = require('colors'); //import colors module for console log
const morgan = require('morgan'); //import morgan to see requests in the terminal to the database
const connectDB = require('./config/db'); //import connectDB function from db.js

dotenv.config({path: './config/config.env'}); //import the global variables config file

connectDB(); //call the connectDB function in the server.js

const transactions = require('./routes/transactions'); //import routes

const app = express(); //initialize the app

app.use(express.json());  // body parser to send something from client

//if the environment is development then use morgan for logging request on our terminal to the database
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//set the routes to api/v1/transactions
app.use('/api/v1/transactions', transactions);

// if the environment is production then use the build folder and get the static index.html for app
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

//get the PORT number from global variable or set it to 5000
const PORT = process.env.PORT || 5000;

//listen the app on the desired PORT i.e. 5000 and log the server status
app.listen(PORT, () => {
console.log(`server running in the ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});

