const addAssignment = require("../Api/Assignment/addAssignment");
const findAllAssignments = require("../Api/Assignment/findAllAssignments");
const findAssignmentById = require("../Api/Assignment/findAssignmentById");
const statusChange = require("../Api/Assignment/statusChange");

const router = require("express").Router();

//! Finding all assignments
router.get("/", findAllAssignments);

//! Finding Assignmet by ID
router.get("/findbyid", findAssignmentById);

//! Update status
router.get("/change-status", statusChange);

//! Adding Assignment
router.post("/add", addAssignment);

module.exports = router;
