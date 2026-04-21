const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/userController");
const User = require("../models/User");

// auth
router.post("/signup", signup);
router.post("/login", login);

// ✅ GET /users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({ role: "employee" });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;