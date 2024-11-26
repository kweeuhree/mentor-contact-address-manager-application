const express = require("express");
const config = require("./config/db.js");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

// app.use('/capstone', Router)

config();



app.listen(PORT, () => {
    console.log("Server is running on port 3000");
  });