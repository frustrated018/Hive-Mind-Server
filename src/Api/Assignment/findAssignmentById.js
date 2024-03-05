const Assignment = require("../../Models/Assignment");

const findAssignmentById = async (req, res) => {
  try {
    const id = req.query.id;
    const result = await Assignment.findById(id);

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Couldn't fnd the assignment you're looking for" });
  }
};

module.exports = findAssignmentById;
