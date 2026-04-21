const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  skills: String, // or Array if you want multiple skills
  location: String,
  rate: Number
});

module.exports = mongoose.model("Worker", workerSchema);