const Assignment = require("../../Models/Assignment");

const findAllAssignments = async (req, res) => {
  const result = await Assignment.aggregate([
    {
      $project: {
        thumbnail: 1,
        title: 1,
        difficulty: 1,
        description: 1,
      },
    },
  ]);
  res.send(result);
};

module.exports = findAllAssignments;
