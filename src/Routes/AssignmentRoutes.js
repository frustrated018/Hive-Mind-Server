const findAllAssignments = require("../Api/findAllAssignments");

const router = require("express").Router();

//! Finding all assignments

router.get("/", findAllAssignments);

module.exports = router;
