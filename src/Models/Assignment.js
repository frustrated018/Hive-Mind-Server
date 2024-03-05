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
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    default: "normal",
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
    required: true,
  },
  due: {
    type: Date,
  },
});

const Assignment = model("Assignment", AssignmentSchema);

module.exports = Assignment;
