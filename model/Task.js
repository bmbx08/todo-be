const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
  },
  {timestamps: true}
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;