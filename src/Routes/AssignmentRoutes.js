const addAssignment = require("../Api/Assignment/addAssignment");
const findAllAssignments = require("../Api/Assignment/findAllAssignments");

const router = require("express").Router();

//! Finding all assignments
router.get("/", findAllAssignments);

//! Adding Assignment
router.post("/add", addAssignment);

module.exports = router;
