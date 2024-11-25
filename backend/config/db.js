const mongoose = require("mongoose");
require("dotenv/config");

const Connection = async () => {
  try {
    console.log(process.env.ATLAS_URI);
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection failed", err);
  }
};

module.exports = Connection;
