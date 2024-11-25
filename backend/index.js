const express = require("express");
const config = require("./config/db.js");
require("dotenv").config();
const PORT = 3000;

const app = express();

config();

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
