const mongoose = require('mongoose'); //import mongoose common JS syntax

//connect to MongoDB database through MONGO_URI (connection string)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, //required to eliminate warnings from mongoose
      useCreateIndex: true, //required to eliminate warnings from mongoose
      useUnifiedTopology: true, //required to eliminate warnings from mongoose
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold //log the connectivity status
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1); //shut down the application and exit
  }
};

module.exports = connectDB; // export connectDB function
