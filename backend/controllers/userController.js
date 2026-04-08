const User = require("../models/User");

// SIGN UP
exports.signup = async (req, res) => {
  const { username } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User(req.body);
  await user.save();

  res.json({ message: "User registered successfully", user });
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
};