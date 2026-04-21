const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");

// GET /api/workers?skill=plumber
router.get("/workers", async (req, res) => {
  const { skill } = req.query;

  try {
    const query = skill
      ? { skills: { $regex: skill, $options: "i" } }
      : {};

    const workers = await Worker.find(query);

    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;