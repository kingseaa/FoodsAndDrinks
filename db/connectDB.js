const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/users");
    console.log("conneted!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
