const Assignment = require("../../Models/Assignment");

const addAssignment = async (req, res) => {
  try {
    const newAssignment = req.body.assignment;
    const result = await Assignment.create(newAssignment);
    res.status(201).send({
      result,
      insertedId: 1,
      message: "Assignment Created Successfully!",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ insertedId: 0, message: "Couldn't create assignment" });
  }
};

module.exports = addAssignment;
