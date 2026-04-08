const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  skillRequired: String,
  location: String,
  salary: String,

  // 👇 NEW
  timeRequired: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Job", jobSchema);