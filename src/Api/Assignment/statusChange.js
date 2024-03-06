const Assignment = require("../../Models/Assignment");

// TODO: in future change the "active" to "pending" and update those. can also be used to reject multiple 

const statusChange = async (req, res) => {
  try {
    // Find documents with status "active"
    const activeAssignments = await Assignment.find({ status: "active" });

    // Iterate over each active assignment and update its status to "approved"
    const updatePromises = activeAssignments.map(async (assignment) => {
      assignment.status = "approved";
      await assignment.save();
    });

    // Wait for all updates to complete
    await Promise.all(updatePromises);
    res.status(200).send("Updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = statusChange;
