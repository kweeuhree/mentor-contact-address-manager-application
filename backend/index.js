const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config({path: "./config.env"});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});