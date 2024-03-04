const express = require("express");
require("dotenv").config();

const app = express();

//! Assignment related routes

const assignmentRoutes = require("./Routes/AssignmentRoutes");
app.use("/assignments", assignmentRoutes);

//! Cheking if shit is running

app.get("/health", (req, res) => {
  res.send("Server is running...");
});

module.exports = app;
