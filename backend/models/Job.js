const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  skillRequired: String,
  location: String,
  salary: String
});

module.exports = mongoose.model("Job", jobSchema);