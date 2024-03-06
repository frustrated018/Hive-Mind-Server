const { Schema, model } = require("mongoose");

const AssignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    default: "00",
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },
  status: {
    type: String,
    required: true,
  },
  creator: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  due: {
    type: Date,
  },
});

const Assignment = model("Assignment", AssignmentSchema);

module.exports = Assignment;
