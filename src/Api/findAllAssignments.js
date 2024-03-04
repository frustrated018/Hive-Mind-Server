const Assignment = require("../Models/Assignment");

const findAllAssignments = async (req, res) => {
  const result = await Assignment.find();
  res.send(result);
};

module.exports = findAllAssignments;
