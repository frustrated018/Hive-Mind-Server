const express = require("express");
require("dotenv").config();

const app = express();

//! Cheking if shit is running

app.get("/health", (req, res) => {
  res.send("Server is running...");
});

module.exports = app;
