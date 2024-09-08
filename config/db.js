const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://devcomper:bfVLtdsaWQaVvQTc@devcamperv2.qlzqy.mongodb.net/?retryWrites=true&w=majority&appName=devcamperv2', {
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
