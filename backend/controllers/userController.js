const User = require("../models/User");

exports.addUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};