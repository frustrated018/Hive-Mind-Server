const Assignment = require("../../Models/Assignment");


//TODO: Update the aggrigate pipeline to Paginate the data for an even faster load on the client side

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
