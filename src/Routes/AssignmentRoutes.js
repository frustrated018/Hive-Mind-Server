const addAssignment = require("../Api/Assignment/addAssignment");
const findAllAssignments = require("../Api/Assignment/findAllAssignments");
const findAssignmentById = require("../Api/Assignment/findAssignmentById");

const router = require("express").Router();

//! Finding all assignments
router.get("/", findAllAssignments);

//! Finding Assignmet by ID
router.get("/findbyid", findAssignmentById);

//! Adding Assignment
router.post("/add", addAssignment);

module.exports = router;
