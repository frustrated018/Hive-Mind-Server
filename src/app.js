const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//! MiddleWares
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", process.env.PROD_ENV] }));

//* Assignment related routes

const assignmentRoutes = require("./Routes/AssignmentRoutes");
app.use("/assignments", assignmentRoutes);

//* Cheking if server is running

app.get("/health", (req, res) => {
  res.send("Server is running...");
});

module.exports = app;
