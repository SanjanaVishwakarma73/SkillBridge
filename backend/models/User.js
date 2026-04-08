const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  username: String,
  password: String,
  role: String, // employee / employer

  // 👇 NEW
  skills: [String],
  availability: String // "morning", "evening", "full-day"
});

module.exports = mongoose.model("User", userSchema);