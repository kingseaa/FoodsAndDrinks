const mongoose = require("mongoose");
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/user_management");
    console.log("conneted!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
