const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/devcamperdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected'.cyan.underline.bold);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
